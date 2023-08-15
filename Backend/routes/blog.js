const { createBlog ,deleteBlog,getBlog,getBlogs,updateBlog, likeBlog} = require('../controller/blog.js');

const express = require('express');

const router = express.Router();

router.post('/', createBlog);
router.get('/',getBlogs);
router.get('/:id',getBlog);
router.patch('/:id',updateBlog);
router.delete('/:id',deleteBlog);
router.post('/likeBlog',likeBlog);









module.exports = { router };