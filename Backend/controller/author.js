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
      dateOfBirth:dob,
      gender,
      password,
    });

    res.status(201).json({
      msg: "author is created successfully ",
      data,
    });
  } catch (error) {
    res.status(400).json({
      msg: "something went wrong while creating creating author ",
      error,
    });
  }
};
const getAuthor = async (req, res) => {
    try {
        const email = req.params;
        console.log(email);

        const data = await Author.find( email );
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

module.exports = { createAuthor, getAuthor };
