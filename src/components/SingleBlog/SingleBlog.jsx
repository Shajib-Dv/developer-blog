/** @format */

import React from "react";

const SingleBlog = (props) => {
  const { authorName, authorImg, title, date, time, tags, banner, updateTime } =
    props.blog;
  //   console.log(authorName);
  return (
    <>
      <div className="card bg-slate-100 shadow-2xl">
        <figure>
          <img className="w-full" src={banner} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <div className="flex gap-1 ">
              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                  <img src={authorImg} alt="" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-2xl">{authorName}</h3>
                <p className="text-gray-500">
                  {date}
                  <span> ({updateTime} days ago)</span>
                </p>
              </div>
            </div>
            <div>
              <p className="text-gray-500">{time} min read</p>
            </div>
          </div>
          <div>
            <h1 className="text-4xl">{title}</h1>
          </div>
          <div className="card-actions justify-start py-2">
            {tags.map((tag) => (
              <div className="text-gray-500">#{tag}</div>
            ))}
          </div>
          <div>
            <button className="text-blue-600 underline font-bold">
              Mark as Read
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;