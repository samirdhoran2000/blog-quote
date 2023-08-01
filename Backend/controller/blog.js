const Blog = require("../model/blog.js");

const createBlog = async (req, res) => {
  try {
    const { body, id } = req.body;

    const data = await Blog.create({
      body,
      authorId: id,
    });
    res.status(200).json({
      msg: "blog create successfully ",
      data,
    });
  } catch (error) {
    res.status(400).json({
      msg: "something went wrong in blog create controller ",
      error,
    });
  }
};
const getBlogs = async (req, res) => {
  try {
    const data = await Blog.find();
    res.status(200).json({
      msg: "blog gets successfully ",
      data,
    });
  } catch (error) {
    res.status(400).json({
      msg: "something went wrong in blog gets controller ",
      error,
    });
  }
};
const getBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Blog.findById(id);
    if (!data) {
      res.status(400).json({
        msg: "blog not found ",
      });
      return;
    }
    res.status(200).json({
      msg: "blog get successfully ",
      data,
    });
  } catch (error) {
    res.status(400).json({
      msg: "something went wrong in blog gets controller ",
      error,
    });
  }
};
const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const data = await Blog.findByIdAndUpdate(
      {
        _id: id,
      },
      body,
      {
        new: true,
      }
    );
    if (!data) {
      res.status(400).json({
        msg: "blog not found ",
      });
      return;
    }
    res.status(200).json({
      msg: "blog update successfully ",
      data,
    });
  } catch (error) {
    res.status(400).json({
      msg: "something went wrong in blog update controller ",
      error,
    });
  }
};
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Blog.findByIdAndDelete(id);
    if (!data) {
          res.status(400).json({
            msg: "blog not found ",
          });
        return;
      };
    res.status(200).json({
      msg: "blog deleted successfully ",
      data,
    });
    
  } catch (error) {
    res.status(400).json({
      msg: "something went wrong in blog delete controller ",
      error,
    });
  }
};

module.exports = { createBlog, getBlogs, getBlog, updateBlog, deleteBlog };
