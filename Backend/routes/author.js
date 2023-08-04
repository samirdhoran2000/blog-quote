const express = require("express");
const router = express.Router();
const {
  createAuthor,
  getAuthor,
  deleteAuthors,
  getAuthors,
  updateAuthors,
} = require("../controller/author.js");
const {login} = require("../controller/login.js");
const { loginAuth } = require("../middleware/auth.js");

router.post("/", createAuthor);
router.get("/", loginAuth, getAuthors);
router.get("/:email",loginAuth, getAuthor);
router.patch("/:id", updateAuthors);
router.delete("/:email", deleteAuthors);
router.post("/login", login);

module.exports = { router };
