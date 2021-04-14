const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blog = new Schema(
  {
    title: {
      type: String,
    },
    body: {
      type: String,
    },
    author: {
      type: String,
    },
  },
  { collection: "blogs" }
);

module.exports = mongoose.model("blogs", blog);
