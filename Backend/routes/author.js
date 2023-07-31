const express = require('express');
const router = express.Router()
const { createAuthor, getAuthor}=require("../controller/author.js")

router.post("/", createAuthor);
router.get("/:email", getAuthor);



module.exports = {router};