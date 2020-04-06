import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Login from "./Login";
import Signup from './Signup'
import Messages from './Messages'
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Signup" component={Signup}/>
      <Route exact path="/Messages" component={Messages}/>
    </div>
  </Router>,
  document.getElementById("root")
);
