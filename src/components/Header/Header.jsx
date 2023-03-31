/** @format */

import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <div className="navbar bg-base-100 mb-4">
          <div className="flex-1">
            <a className=" text-black font-bold text-2xl">Developers Blog</a>
          </div>
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <label className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="/admin-bg.jpeg" />
                </div>
              </label>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
