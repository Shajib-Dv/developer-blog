/** @format */

import React from "react";

const SingleBlog = (props) => {
  const { authorName, authorImg, title, date, time, tags, banner } = props.blog;
  //   console.log(authorName);
  return (
    <>
      <div className="card bg-slate-200 shadow-2xl">
        <figure>
          <img className="w-full" src={banner} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{authorName}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
