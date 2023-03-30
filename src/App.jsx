/** @format */

import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Blogs />
    </div>
  );
}

export default App;
