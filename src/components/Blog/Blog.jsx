/** @format */

import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="border bg-slate-200 shadow-2xl p-4 mt-2 rounded-md">
        <h2 className="text-3xl font-bold">
          Difference between Props and State ?
        </h2>
        <p className="text-gray-600 font-semibold py-2">
          Props are unidirectional and it is also emittable but state is like a
          variable. It can store number boolean array object and if you need you
          can change a state value.
        </p>
      </div>

      <div className="border bg-slate-200 shadow-2xl p-4 mt-2 rounded-md">
        <h2 className="text-3xl font-bold ">How does useState works ?</h2>
        <p className="text-gray-600 font-semibold py-2">
          useState is React Hook. It's allow you to add state to a functional
          component. It returns an array with two values. The first one take a
          initial value and second one is a function to update it.
        </p>
      </div>

      <div className="border bg-slate-200 shadow-2xl p-4 mt-2 rounded-md">
        <h2 className="text-3xl font-bold ">Purpose of useEffect ?</h2>
        <p className="text-gray-600 font-semibold py-2">
          useEffect is React Hook. By using useEffect you can tell react to do
          something after render a components. useEffect are takes to parameter
          the first one is a anonymous function and second one is a dependency
          array. The function take action depending on dependency array. if
          dependency array changed useEffect will rerender the hole state.
        </p>
      </div>
      <div className="border bg-slate-200 shadow-2xl p-4 mt-2 rounded-md">
        <h2 className="text-3xl font-bold ">How does react work ?</h2>
        <p className="text-gray-600 font-semibold py-2">
          React is a JavaScript library. It is used for fond-end development.
          React makes user interface more clear and wonder. React are component
          badge and React components work similarly to JavaScript functions as
          they accept arbitrary inputs called properties or props. It's possible
          to have as many components as necessary without cluttering your code.
        </p>
      </div>
    </div>
  );
};

export default Blog;
