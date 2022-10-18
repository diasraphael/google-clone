import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import Search from "../Search/Search";

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-between items-center p-4">
        <div className="">
          <Link
            to="/about"
            className="px-3 text-sm text-[rgba(0,0,0,.87)] hover:underline"
          >
            About
          </Link>
          <Link
            to="/store"
            className="px-3 text-sm text-[rgba(0,0,0,.87)] hover:underline"
          >
            Store
          </Link>
        </div>
        <div className="flex items-center">
          <Link
            to="/gmail"
            className="px-3 text-sm text-[rgba(0,0,0,.87)] hover:underline"
          >
            Gmail
          </Link>
          <Link
            to="/images"
            className="px-3 text-sm text-[rgba(0,0,0,.87)] hover:underline"
          >
            Images
          </Link>
          <span className="px-3">
            <AppsIcon></AppsIcon>
          </span>
          <span className="px-3">
            <Avatar></Avatar>
          </span>
        </div>
      </div>
      <div className="mt-20 flex flex-col">
        <img
          className="h-28 object-contain"
          src="./assets/googlelogo.png"
          alt="google logo"
        />
        <div>
          <Search></Search>
        </div>
      </div>
    </div>
  );
};

export default Home;
