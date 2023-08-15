const Blog = require("../model/blog.js");

const createBlog = async (req, res) => {
  try {
    const { body } = req.body;
    const passData = req.id;

    console.log('pass data ', passData);

    const data = await Blog.create({
      body,
      authorId: passData
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
    const data = await Blog.find().populate('authorId');
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

    const data = await Blog.findById(id).populate('authorId').exec((err, populateData) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('populate data ',populateData);
      
    })
    console.log(data);
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
const likeBlog = async (req, res) => {
  try {
    const { blogId } = req.body;
    console.log(blogId);
    const authorId = req.id;
    const data = await Blog.findById(blogId);
    if (!data) {
          res.status(400).json({
            msg: "blog not found ",
          });
        return;
    };
    if (data.like.includes(authorId)) {

      const updatedBlog = await Blog.findByIdAndUpdate(
        {
          _id:blogId
        },
        {
          $pull: {
            like:authorId
          }
        },
        {
          new:true
        }
      )

       return res.status(200).json({
         msg: "You already like this blog and you unlike this blog successfully ",
         data: updatedBlog,
         like: false,
       });
    
    }
    const updatedBlog = await Blog.findByIdAndUpdate({
      _id: blogId
    },
      {
        $push: {
        like:authorId
      }
      },
      {
      new:true
    });
    
    console.log("likked data ", updatedBlog);
    res.status(200).json({
      msg: "blog liked successfully ",
      data: updatedBlog,
      like:true
    });
    
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "something went wrong in blog like controller ",
      error:error.message,
    });
  }
};

module.exports = {
  createBlog,
  getBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
  likeBlog,
};
