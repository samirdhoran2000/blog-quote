const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    body: {
      type: String,
      required: true,
      trim: true,
    },

    like: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Author",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", blogSchema);
