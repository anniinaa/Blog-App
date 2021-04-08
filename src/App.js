import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./components/BlogDetails";
import Create from "./components/Create";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import Styles from "./styles/styles.css"


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  )

}

export default App;
