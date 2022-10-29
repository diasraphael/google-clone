import React from "react";
//import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import useGoogleSearch from "../../hooks/useGoogleSearch";
import response from "../../response/response";
//import { InitialState } from "../../store";
import Search from "../Search/Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SettingsIcon from "@mui/icons-material/Settings";

const SearchResults = () => {
  //const searchTerm = useSelector((state: InitialState) => state.searchTerm);
  // const data = useGoogleSearch(searchTerm);
  const data = response;
  console.log(data);
  return (
    <div className="searchPage">
      <div className="flex sticky top-0 bg-white z-50 items-start p-7 border-b-2 border-lightgray-900">
        <Link to="/">
          <img
            className="h-12 mr-14 object-contain"
            src="assets/googlelogo.png"
            alt="google"
          ></img>
        </Link>
        <div className="max-w-3xl w-9/12">
          <Search hideButtons></Search>
          <div className="flex items-center text-[gray] mt-7">
            <div className="flex mr-24">
              <div className="flex mr-4">
                <SearchIcon></SearchIcon>
                <Link to="/all">All</Link>
              </div>
              <div className="flex mr-4">
                <DescriptionIcon></DescriptionIcon>
                <Link to="/news">News</Link>
              </div>
              <div className="flex mr-4">
                <ImageIcon></ImageIcon>
                <Link to="/all">Images</Link>
              </div>
              <div className="flex mr-4">
                <LocalOfferIcon></LocalOfferIcon>
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="flex mr-4">
                <RoomIcon></RoomIcon>
                <Link to="/maps">Maps</Link>
              </div>
              <div className="flex mr-4">
                <MoreVertIcon></MoreVertIcon>
                <Link to="/more">More</Link>
              </div>
            </div>

            <div className="flex">
              <div className="flex mr-4">
                <SettingsIcon></SettingsIcon>
                <Link to="/settings">Settings</Link>
              </div>
              <div className="flex mr-4">
                <SearchIcon></SearchIcon>
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
