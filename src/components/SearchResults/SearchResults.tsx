import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useGoogleSearch from "../../hooks/useGoogleSearch";
//import response from "../../response/response";
import { InitialState } from "../../store";
import Search from "../Search/Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SettingsIcon from "@mui/icons-material/Settings";

const SearchResults = () => {
  const searchTerm = useSelector((state: InitialState) => state.searchTerm);
  const data: any = useGoogleSearch(searchTerm);
  //const data = response;  mock response
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
          <Search hideButtons searchTerm={searchTerm}></Search>
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
      {searchTerm && data && (
        <div className="max-w-2xl mt-5 ml-60">
          <div className="text-[#70757a] text-sm">
            About {data!.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime}seconds) for
            {searchTerm}
          </div>
          {data?.items.map((item: any, index: string) => {
            return (
              <div className="my-10" key={index}>
                <a href={item.link} className="underline flex">
                  {item.pagemap?.cse_image &&
                    item.pagemap?.cse_image?.length > 0 &&
                    item.pagemap?.cse_image[0].src && (
                      <img
                        alt="title"
                        className="w-7 h-7 mr-3 object-contain"
                        src={item.pagemap?.cse_image[0]?.src}
                      ></img>
                    )}
                  {item.displayLink}
                </a>
                <a href={item.link}>
                  <h1 className="font-medium text-xl">{item.title}</h1>
                </a>
                <p className="mt-2.5">{item.snippet}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
