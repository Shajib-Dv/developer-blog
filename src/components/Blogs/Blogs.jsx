/** @format */

import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import SingleBlog from "../SingleBlog/SingleBlog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [singleBlog, setSingleBlog] = useState([]);
  const [readTime, setReadTime] = useState(0);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  // get the blog details by function

  const handleBlog = (blog) => {
    const newBlog = [...singleBlog, blog];
    setSingleBlog(newBlog);
  };

  // get the reading time

  const getReadingTime = (time) => {
    setReadTime(+time + readTime);
  };

  return (
    <div className="md:flex gap-4">
      <div className="w-full grid grid-cols-1 gap-4">
        {blogs.map((blog) => (
          <SingleBlog
            key={blog.id}
            blog={blog}
            handleBlog={handleBlog}
            getReadingTime={getReadingTime}
          />
        ))}
      </div>
      <div className="w-2/5 ">
        <Sidebar singleBlog={singleBlog} readTime={readTime} />
      </div>
    </div>
  );
};

export default Blogs;
