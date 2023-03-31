/** @format */

import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="md:w-3/4 mx-auto px-2">
      <Header />
      <Blogs />
    </div>
  );
}

export default App;
