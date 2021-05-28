const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blog = new Schema({
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  author: {
    type: String,
  },
});

blog.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject.__v;
    delete returnedObject._id;
  },
});

module.exports = mongoose.model("blogs", blog);
