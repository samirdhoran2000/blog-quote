const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "first name is required "],
      trim: true,
      lowercase: true,
    },
    lastName: {
      type: String,
      required: [true, "last name is required "],
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "email is required "],
      trim: true,
      lowercase: true
    },
    mobileNo: {
      type: Number,
      required: [true, "mobile no. is required "],
      trim: true
    },
    dateOfBirth: {
      type: Date,
      required: [true, "date of birth is required "],
      trim: true,
    },
    gender: {
      type: String,
      required: [true, "gender is required "],
      enum: {
        values: ["male", "female"],
        message: `{VALUE} is not equal to male or feamale`,
      },
    },
    password: {
      type: String,
      required: [true, "password is required "],
      trim: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    user: {
      type: String,
      enum: ['USER','ADMIN'],
      default: "USER",
    },
    post: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Blog",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Author", AuthorSchema);
