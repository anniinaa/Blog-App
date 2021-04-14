import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Anonymous");
  const [ispending, setIspending] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIspending(true);
    const result = await axios.post(`http://localhost:4000/insert`, blog);
    console.log("added", result);
    setIspending(true);
    history.push("/");
  };

  return (
    <div className="new-blog">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog text:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>Blog author:</label>
        <input
          className="select-author"
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {!ispending && <button className="add-blog">Add blog</button>}
        {ispending && (
          <button disabled className="add-blog">
            Done!
          </button>
        )}
      </form>
    </div>
  );
};

export default Create;
