import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Card from "../components/Card";
import Home from "../Home";
import FormInsert from "./FormInsert";

var Posts = () => {
  return (
    <div className="content space-y-2">
      <h2 className="text-gray-700 font-semibold capitalize text-xl">Posts</h2>
      <p className="text-gray-600 text-sm pb-4">welcome to posts page!</p>
      <Link className="text-gray-50 bg-sky-500 rounded-md shadow-md p-3 font-sans " to="/posts/formInsert">
        New
      </Link>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 md:max-w-3xl lg:min-w-fit m-auto justify-center shrink-0">
        <div>{card()}</div>
        <div>{card()}</div>
        <div>{card()}</div>
        <div>{card()}</div>
        <div>{card()}</div>
      </div>
    </div>
  );
};

var card = () => {
  return (
    <>
      {/* card */}
      <Card
        time="3 minute ago"
        title="card title"
        desc="card description Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsa nam, cupiditate nemo doloribus ea deserunt quam reprehenderit facilis repellendus?"
        url="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80"
        alt="image"
        link="go.."
      />
      {/* end card */}
    </>
  );
};

export default Posts;
