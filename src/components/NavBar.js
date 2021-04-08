import { Link } from "react-router-dom";

const Navbar = () =>{

    const setStyle = { color: "white", 
    backgroundColor: "rgba(204, 63, 202, 0.34)",
    borderRadius:"8px"};

    return (
        <nav className="navbar">
            <h1>The Blog Spot</h1>
        <div className="links">
        <Link to="/">Home</Link>
        <Link className="newBlog" to="/create" >New Blog</Link>
        </div>
        </nav>
    )
}

export default Navbar;