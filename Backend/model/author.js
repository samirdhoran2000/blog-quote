const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
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
    required: [true, "email is required "],
    trim: true,
    lowercase: true,
  },
  MobileNo: {
    type: Number,
    required: [true, "mobile no. is required "],
      trim: true,
    minlenght:[10, "length of digits is less than 10 digits"],
    maxlength:[13, "length of digits is greater than 13 digits"],
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
          values: ['male', 'female'],
          message:'gender is only male or female '
    }
  },
  password: {
    type: String,
    required: [true, "password is required "],
    trim: true,
  },
});

module.exports = mongoose.model("Author", AuthorSchema);
