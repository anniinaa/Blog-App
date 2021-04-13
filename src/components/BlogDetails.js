import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import useFetch from "../useFetch";

const BlogDetails = () => {

    const {id} = useParams();
    const {data: blog} = useFetch("http://localhost:8000/blogs/" +id);
    const history = useHistory();

    const handleClick= () => {

        fetch("http://localhost:4000/find"+ blog.id, {
            method: "DELETE"
        }).then(()=>{
            history.push("/");
        })

    }

    return ( 
        <div className="blog-details">
            <div className="backBtn">
                <Link className="backLink" to="/">Back</Link>
            </div>
            {blog && (
            <article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div className="blog-body">{blog.body}</div>
            <button
            onClick={handleClick}
            >delete</button>
            </article>
            )}
        </div>
     );
}
 
export default BlogDetails;