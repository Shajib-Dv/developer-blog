/** @format */

import "./App.css";
import Blog from "./components/Blog/Blog";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="md:w-3/4 mx-auto px-2">
      <Header />
      <Blogs />
      <Blog />
      <ToastContainer />
    </div>
  );
}

export default App;
