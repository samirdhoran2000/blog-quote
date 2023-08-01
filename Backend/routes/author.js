const express = require("express");
const router = express.Router();
const {
  createAuthor,
  getAuthor,
  deleteAuthors,
  getAuthors,
  updateAuthors,
} = require("../controller/author.js");

router.post("/", createAuthor);
router.get("/", getAuthors);
router.get("/:email", getAuthor);
router.patch("/:id", updateAuthors);
router.delete("/:email", deleteAuthors);

module.exports = { router };
