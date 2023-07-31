const express = require('express');
const router = express.Router()
const { createAuthor, getAuthor}=require("../controller/author.js")

router.post("/", createAuthor);
router.get("/", getAuthor);



module.exports = {router};