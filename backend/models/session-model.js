// session role -> mern full stack, java full stack ,frontend
// exp => 2, 1, 10
// userId => this will store ref

import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    role: { type: String, required: true },
    experience: { type: String, required: true },
<<<<<<< HEAD
    topicsToFocus: { type: String, default: "" },
    description: { type: String, default: "" },
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
  },
  { timestamps: true }
=======
    questions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
      },
    ],
  },
  { timestamps: true },
>>>>>>> f7e936b7c1352b3a4b0000364b491be6050fddb4
);

const Session = mongoose.model("Session", sessionSchema);

export default Session;
<<<<<<< HEAD
=======

// let sessionDoc = {
//   user: "USER_ID",
//   role: "MERN full stack",
//   exp: 2,
//   questions: [],
// };
>>>>>>> f7e936b7c1352b3a4b0000364b491be6050fddb4
