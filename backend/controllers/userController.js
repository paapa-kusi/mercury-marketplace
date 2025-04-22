// User management controller for handling user-related operations
import User from "../schemas/userModel.js";
import University from "../schemas/universityModel.js";

// Creates a new user account with provided credentials
const signupUser = async (req, res) => {
  const { email, username, password, role, university } = req.body;
  try {
    const user = await User.signup({
      email,
      username,
      password,
      role,
      university,
    });
    res
      .status(200)
      .json({ message: `User ${user.username} successfully created` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Retrieves a user's information by their Clerk ID
const getUser = async (req, res) => {
  const { clerkId } = req.query;
  try {
    const user = await User.findOne({ clerkId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Updates a user's profile with role and university information
const completeProfile = async (req, res) => {
  const { clerkId, role, university } = await req.body;

  try {
    let uni = await University.findById(university);
    if (!uni) {
      return res.status(404).json({ message: "University not found" });
    }
    const user = await User.findOneAndUpdate({
      clerkId: clerkId,
      role,
      university: uni._id,
      new: true,
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Adds user to university's student or professor list
    if (role === "Student") {
      await University.findByIdAndUpdate(uni._id, {
        $addToSet: { students: user._id },
      });
    } else if (role === "Professor") {
      await University.findByIdAndUpdate(uni._id, {
        $addToSet: { professors: user._id },
      });
    }

    res.status(200).json({ message: "Profile updated successfully" });
  } catch (err) {
    console.error("Error updating profile: ", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Gets a user's profile information including their role and university
const getProfile = async (req, res) => {
  const { clerkId } = req.query;
  try {
    const user = await User.findOne({ clerkId }).populate("university");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json({
      role: user.role,
      university: user.university ? user.university._name : null,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Retrieves a list of all available universities
const getAllUniversities = async (req, res) => {
  try {
    const universities = await University.find({}, "_id _name");
    res.status(200).json(universities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Updates a user's associated university
const updateUniversity = async (req, res) => {
  const { university, clerkId } = req.body;

  try {
    const user = await User.findOne({ clerkId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.university = university;
    await user.save();

    res.status(200).json(university);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export {
  signupUser,
  completeProfile,
  getProfile,
  getAllUniversities,
  getUser,
  updateUniversity,
};
