import User from "../schemas/userModel.js";
import University from "../schemas/universityModel.js";

const clerkWebhook = async (req, res) => {
  const { type, data } = await req.body;
  // console.log(data);

  try {
    if (type === "user.created") {
      const { id, email_addresses, first_name, last_name, username } = data;
      const email = email_addresses[0]?.email_address;
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(200).json({ message: "User already exists" });
      }

      console.log(id);
      const user = await User.create({
        email: email,
        firstName: first_name,
        lastName: last_name,
        username: username,
        role: "Student",
        university: null,
        clerkId: id,
      });
      res
        .status(200)
        .json({ message: `User ${user.username} successfully created` });
    }
    if (type === "user.deleted") {
      const { id } = data;

      try {
        const user = await User.findOne({ clerkId: id });
        if (!user) return res.status(404).json({ message: "User not found." });

        const universityId = user.university;
        const role = user.role;

        await User.deleteOne({ _id: user._id });

        if (universityId) {
          const update = {
            $pull: {
              [role === "Student" ? "students" : "professors"]: user._id,
            },
          };
          await University.findByIdAndUpdate(universityId, update);
        }

        return res
          .status(200)
          .json({ message: "User deleted and references cleaned." });
      } catch (err) {
        console.error("Error deleting user:", err);
        return res.status(500).json({ message: "Internal server error." });
      }
    }
  } catch (err) {
    console.error("Webhook error: ", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default clerkWebhook;
