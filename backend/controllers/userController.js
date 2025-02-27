import User from "../schemas/userModel.js";

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
    res.json({ message: `User ${user.username} successfully created` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default signupUser;
