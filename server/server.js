const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const router = express.Router();
app.use(cors());
const Blog = require("./data/Blog.js");
const env = require("./env.js");

mongoose.connect(env.uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

app.use(express.json());

app.use(express.static(path.join(__dirname, "../build")));

app.use("/", router);
hero;
router.route("/insert").post(async (req, res) => {
  const { title, body, author } = req.body;
  const newBlog = new Blog({
    title,
    body,
    author,
  });
  const response = await Blog.create(newBlog);
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

router.route("/delete/:blogId").delete(async (req, res) => {
  const blogId = req.params.blogId;
  await Blog.deleteOne({ _id: blogId });
  return res.status(204).end();
});

router.route("/find/:blogId").get(async (req, res) => {
  const blog = await Blog.findById(req.params.blogId);
  return res.send(blog);
});

const port = process.env.PORT || 4000;

app.listen(port, function () {
  console.log("Server is running on Port: " + port);
});
