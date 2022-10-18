import React from "react";
import { useSelector } from "react-redux";
import { InitialState } from "../../store";

const SearchResults = () => {
  const searchTerm = useSelector((state: InitialState) => state.searchTerm);
  return <div>{searchTerm}</div>;
};

export default SearchResults;
