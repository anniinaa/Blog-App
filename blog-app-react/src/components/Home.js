import useFetch from "../useFetch";
import BlogList from "./BlogList";

const localhostUrl = "http://localhost:4000/";
const hostUrl = "https://blog-app-654.herokuapp.com/";

const serverUrl =
  process.env.NODE_ENV === "development" ? localhostUrl : hostUrl;

const Home = () => {
  const { data: blogs } = useFetch(`${serverUrl}find`);

  return <div className="home">{blogs && <BlogList blogs={blogs} />}</div>;
};

export default Home;
