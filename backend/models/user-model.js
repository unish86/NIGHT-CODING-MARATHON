import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
<<<<<<< HEAD
  { timestamps: true }
);
const User = mongoose.model("User", UserSchema);

=======
  { timestamps: true },
);

const User = mongoose.model("User", UserSchema);
>>>>>>> f7e936b7c1352b3a4b0000364b491be6050fddb4
export default User;
