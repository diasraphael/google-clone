import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import "./Search.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Search = (props: any) => {
  const { hideButtons, searchTerm } = props;
  const [input, setInput] = useState(searchTerm || "");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSearch = (event: any) => {
    event.preventDefault(); // preventing the refresh
    dispatch({ type: "SEARCH", payload: input });
    navigate("/searchResults");
  };
  return (
    <form>
      <div className="flex items-center border-[lightgray] border-[1px] rounded-full h-10">
        <span className="pl-3 text-[gray]">
          <SearchIcon></SearchIcon>
        </span>
        <input
          className="flex-1 border-none focus:outline-0 p-1"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <span className="pr-3">
          <MicIcon></MicIcon>
        </span>
      </div>
      {hideButtons ? (
        <></>
      ) : (
        <div className="mt-[30px] flex justify-center">
          <span className="buttonStyle m-[5px] rounded bg-[#f8f8f8] border-[white] border-[1px] text-[#5f6368] hover:shadow-[0 1px 1px rgba(0,0,0,.1)] hover:bg-[#f8f8f8]">
            <Button type="submit" onClick={handleSearch}>
              Google Search
            </Button>
          </span>
          <span className="buttonStyle m-[5px] rounded bg-[#f8f8f8] border-[white] border-[1px] text-[#5f6368] hover:shadow-[0 1px 1px rgba(0,0,0,.1)] hover:bg-[#f8f8f8]">
            <Button>I'm feeling lucky</Button>
          </span>
        </div>
      )}
    </form>
  );
};

export default Search;
