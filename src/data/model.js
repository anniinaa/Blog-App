const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let blog = new Schema(
  {
    title: {
      type: String
    },
    body: {
      type: String
    },
    author: {
        type: String
      },
      id: {
        type: Number
      },
  },
  { collection: "blogs" }
);

module.exports = mongoose.model("blogs", blog);
