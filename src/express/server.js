const express = require("express");
const app = express();
const router = express.Router();
const port = 4000;
const cors = require('cors');

app.use(cors());

const mongoose = require("mongoose");
const blogs = require("../data/model.js");

const env = require("../env.js");

mongoose.connect(env.uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function () {
    console.log("MongoDB database connection established successfully");
});

app.use("/", router);

router.route("/insert").get(function (req, res) {
    blogs.insertMany(data, function (err, result) {
        console.log(data)
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

router.route("/find").get(function (req, res) {
    blogs.find({}, function (err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});


app.listen(port, function () {
    console.log("Server is running on Port: " + port);
});