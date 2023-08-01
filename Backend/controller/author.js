const Author = require("../model/author.js");

const createAuthor = async (req, res) => {
  try {
    const { firstname, lastname, email, mobile, dob, gender, password } =
      req.body;
    const data = await Author.create({
      firstName: firstname,
      lastName: lastname,
      email,
      mobileNo: mobile,
      dateOfBirth: dob,
      gender,
      password,
    });
    res.status(201).json({
      msg: "author is created successfully ",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "something went wrong while creating creating author ",
      error,
    });
  }
};

const getAuthors = async (req, res) => {
  try {
    const data = await Author.find();
    res.status(200).json({
      msg: "get authors successfully ",
      data,
    });
  } catch (error) {
    res.status(200).json({
      msg: "something went wrong in get authors ",
      error,
    });
  }
};
const getAuthor = async (req, res) => {
  try {
    const email = req.params;
    console.log(email);

    const data = await Author.findOne(email);
    res.status(200).json({
      msg: "get single author successfully ",
      data,
    });
  } catch (error) {
    res.status(200).json({
      msg: "something went wrong in get single author ",
      error,
    });
  }
};
const updateAuthors = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstname, lastname, email, mobile, dob, gender, password } =
      req.body;
    // console.log(id, body);
    const data = await Author.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        firstName: firstname,
        lastName: lastname,
        email,
        mobileNo: mobile,
        dateOfBirth: dob,
        gender,
        password,
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      msg: "update author successfully ",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(200).json({
      msg: "something went wrong in update author ",
      error,
    });
  }
};
const deleteAuthors = async (req, res) => {
  try {
    const email = req.params;

    const data = await Author.findOneAndDelete(email);
    res.status(200).json({
      msg: "delete author successfully ",
      data,
    });
  } catch (error) {
    res.status(200).json({
      msg: "something went wrong in delete author controller",
      error,
    });
  }
};

module.exports = {
  createAuthor,
  getAuthor,
  getAuthors,
  updateAuthors,
  deleteAuthors,
};
