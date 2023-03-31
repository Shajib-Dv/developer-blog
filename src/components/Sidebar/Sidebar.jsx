/** @format */

import React, { useState } from "react";

const Sidebar = (props) => {
  // console.log(props.singleBlog);
  const blogs = props.singleBlog;

  return (
    <>
      <div className="border-2 bg-slate-50 rounded p-3">
        <h2 className="text-2xl text-blue-600 font-bold">
          Spend time on read : {props.readTime} Min
        </h2>
      </div>
      <div className="my-2 p-3 bg-slate-100">
        <h2 className="text-2xl font-bold rounded-md">
          Bookmarked Blogs : {blogs.length}
        </h2>
        <div>
          {blogs &&
            blogs.map((blog) => (
              <h2
                className="border bg-slate-50 p-2 rounded-md text-2xl font-semibold"
                key={blog.id}
              >
                {blog.title}
              </h2>
            ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
