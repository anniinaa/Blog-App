import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";

const localhostUrl = "http://localhost:4000/";
const hostUrl = "https://blog-app-654.herokuapp.com/";

const serverUrl =
  process.env.NODE_ENV === "development" ? localhostUrl : hostUrl;

const getBlog = async (blogId) => {
  const result = await axios.get(`${serverUrl}find/${blogId}`);

  return result.data;
};

const BlogDetails = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState();
  const history = useHistory();

  useEffect(async () => {
    const newBlog = await getBlog(blogId);
    setBlog(newBlog);
  }, []);

  const onDelete = async (blogId) => {
    await axios.delete(`${serverUrl}delete/${blogId}`);

    history.push("/");
  };

  return (
    <div className="blog-details">
      <div className="backBtn">
        <Link className="backLink" to="/">
          Back
        </Link>
      </div>
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div className="blog-body">{blog.body}</div>
          <button onClick={() => onDelete(blog.id)}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
