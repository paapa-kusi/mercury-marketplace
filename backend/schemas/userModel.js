import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: false, unique: true },
  clerkId: { type: String, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  role: {
    type: String,
    enum: ["Student", "Professor"],
    default: "Student",
  },
  university: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "University",
    default: null,
  },
  listings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Listing" }],
});

// temporary auth should be passed over to Auth0
// UserSchema.statics.signup = async ({
//   email,
//   username,
//   password,
//   role,
//   university,
// }) => {
//   // validate required fields
//   if (!email || !username || !password || !role || !university) {
//     throw new Error("Missing required fields");
//   }

//   if (role !== "Student" && role !== "Professor") {
//     throw new Error("Invalid role");
//   }

//   if (!validator.isEmail(email)) {
//     throw new Error("Invalid email");
//   }

//   const User = mongoose.model("User", UserSchema);

//   if (await User.findOne({ email })) throw new Error("Email already exists");
//   if (await User.findOne({ username }))
//     throw new Error("Username is already in use");

//   const salt = await bcrypt.genSalt(10);
//   const hash = await bcrypt.hash(password, salt);

//   const user = await User.create({
//     email,
//     username,
//     password: hash,
//     role,
//     university,
//   });

//   return user;
// };

export default mongoose.model("User", UserSchema);
