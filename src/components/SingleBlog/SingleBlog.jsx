/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";

const SingleBlog = (props) => {
  const { authorName, authorImg, title, date, time, tags, banner, updateTime } =
    props.blog;
  const { handleBlog } = props;
  const { getReadingTime } = props;
  //   console.log(authorName);

  return (
    <>
      <div className="card bg-slate-100 shadow-2xl">
        <figure>
          <img className="w-full" src={banner} alt="Shoes" />
        </figure>
        <div className="md:card-body w-full p-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-1 ">
              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                  <img className="w-full" src={authorImg} alt="" />
                </div>
              </div>
              <div>
                <h3 className="font-bold md:text-2xl">{authorName}</h3>
                <p className="text-gray-500">
                  {date}
                  <span> ({updateTime} days ago)</span>
                </p>
              </div>
            </div>
            <div className="flex gap-1">
              <p className="text-gray-500">{time} min read</p>
              <button
                className="outline-none"
                onClick={() => handleBlog(props.blog)}
              >
                <FontAwesomeIcon icon={faBookBookmark} />
              </button>
            </div>
          </div>
          <div>
            <h1 className="text-4xl py-2">{title}</h1>
          </div>
          <div className="card-actions justify-start py-2">
            {tags.map((tag, index) => (
              <div className="text-gray-500" key={index}>
                #{tag}
              </div>
            ))}
          </div>
          <div>
            <button
              onClick={() => getReadingTime(time)}
              className="text-blue-600 underline font-bold"
            >
              Mark as Read
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
