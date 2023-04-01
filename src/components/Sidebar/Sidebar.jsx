/** @format */

import React, { useState } from "react";

const Sidebar = (props) => {
  // console.log(props.singleBlog);
  const blogs = props.singleBlog;
  return (
    <div className="md:sticky md:top-2">
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
            blogs.map((blog, index) => (
              <h2
                className="border mt-2 bg-slate-50 p-2 rounded-md text-2xl font-semibold"
                key={index}
              >
                {blog.title}
              </h2>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
