import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <div>
        <Link to="/about">About</Link>
        <Link to="/store">Store</Link>
      </div>
      <div>
        <Link to="/gmail">Gmail</Link>
        <Link to="/images">Images</Link>
      </div>
    </div>
  );
};

export default Home;
