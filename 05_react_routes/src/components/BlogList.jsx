import React from "react";
import blogs from "../data/blog";
import { NavLink } from "react-router-dom";
import "./BlogList.css";

const BlogList = () => {
  return (
    <div className="blog-list-container">
      <h2 className="blog-list-heading">Blog List</h2>
      <ul className="blog-list">
        {blogs.map((blog, indx) => (
          <li key={indx} className="blog-list-item">
            <NavLink to={`/blog/${blog.id}`} className="blog-link">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-author">{blog.author}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
