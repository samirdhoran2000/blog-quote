const Author = require("../model/author.js");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const author = await Author.findOne({ email });

    if (!author) {
      res.status(400).json({
        msg: "user not found ",
      });
      return;
    }

    if (author.password !== password) {
      res.status(400).json({
        msg: "password not match ",
      });
      return;
    }

    const { msg, ...data } = author;

    const payload = {
      id: data._doc._id,
      firstname: data._doc.firstName,
      lastname: data._doc.lastName,
      user: data._doc.user,
      active: data._doc.active,
      email: data._doc.email,
    };
    console.log(msg, data._doc);
    console.log(payload);
      jwt.sign(payload, process.env.SECRET_KEY, {expiresIn:'1h'}, (err, token) => {
          if (err) {
              console.log(err);
              res.status(400).json({
                  msg: "something went wrong while signing the token",
                  err
              });
              return;
          } else {
              console.log(token);
              res.status(200).json({
                msg: "login successful ",
                token,
              });
          }
          
      });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "something went wrong in login controller ",
    });
  }
};

module.exports = { login };
