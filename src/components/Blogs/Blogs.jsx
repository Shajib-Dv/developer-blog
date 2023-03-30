/** @format */

import React, { useEffect, useState } from "react";
import SingleBlog from "../SingleBlog/SingleBlog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  //   console.log(blogs);
  return (
    <div className="md:flex gap-4">
      <div className="w-full">
        {blogs.map((blog) => (
          <SingleBlog key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="w-2/5">sideBar</div>
    </div>
  );
};

export default Blogs;
