import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Posts from "./pages/Posts";

export default function BasicExample() {
  return (
    <Router>
      <div className="main">
        <ul className="navbar">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/posts">
              Posts
            </Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

function About() {
  return (
    <div className="content">
      <h2>About</h2>
      <p>this is the most popular cat post app in the moon!</p>
    </div>
  );
}
