import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {

    const [title, settitle] = useState("")
    const [body, setbody] = useState("")
    const [author, setAuthor] = useState("Anonymous")
    const [ispending, setispending] = useState(false)
    const history = useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog = {title, body, author};

        setispending(true);

        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(()=>{

            setInterval(()=>{
                history.push("/");
            },1500);
        })


    }

    return ( 
        <div className="new-blog">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input 
                type="text" 
                required
                value = {title}
                onChange={(e)=>settitle(e.target.value)} />

                <label>Blog text:</label>
                <textarea
                required
                value = {body}
                onChange={(e)=>setbody(e.target.value)} >
                </textarea>

                <label>Blog author:</label>
                <input 
                className="select-author"
                type="text" 
                required
                value = {author}
                onChange={(e)=>setAuthor(e.target.value)} />
                {!ispending && <button className="add-blog">Add blog</button>}
                {ispending && <button disabled className="add-blog">Done!</button>}

            </form>
        </div>
     );
}
 
export default Create;