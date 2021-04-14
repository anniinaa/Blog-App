const express = require("express");
const app = express();
const router = express.Router();
const port = 4000;
const cors = require("cors");

app.use(cors());

const mongoose = require("mongoose");
const Blog = require("./data/Blog.js");

const env = require("./env.js");

mongoose.connect(env.uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

app.use(express.json());

app.use("/", router);

router.route("/insert").post(async (req, res) => {
  const { title, body, author } = req.body;
  const newBlog = new Blog({
    title,
    body,
    author,
  });
  console.log("newBlog", newBlog);
  const response = await Blog.create(newBlog);
  console.log(response);
  return res.send(response);
});

router.route("/find").get(function (req, res) {
  Blog.find({}, function (err, result) {
    if (err) {
      return res.send(err);
    } else {
      return res.send(result);
    }
  });
});

//Uusi route delete

router.route("/find/:blogId").get(async (req, res) => {
  const blog = await Blog.findById(req.params.blogId);
  return res.send(blog);
});

app.listen(port, function () {
  console.log("Server is running on Port: " + port);
});
