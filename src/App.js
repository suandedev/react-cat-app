import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Detail from "./pages/Detail";
import FormInsert from "./pages/FormInsert";
import Posts from "./pages/Posts";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col">
        <ul className="flex flex-row justify-center bg-red-300 shadow antialiased font-sans">
          <li>
            <Link className="nav_link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav_link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav_link" to="/posts">
              Posts
            </Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/posts/formInsert" element={<FormInsert />}></Route>
          <Route path="/posts/detail" element={<Detail />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

function About() {
  return (
    <div className="content space-y-2">
      <h2 className="font-semibold capitalize text-xl text-gray-700">About</h2>
      <p className="text-gray-600 font-thin text-sm">this is the most popular cat post app in the moon!</p>
    </div>
  );
}
