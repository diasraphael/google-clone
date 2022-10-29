import { useEffect, useState } from "react";
import API_KEY from "../keys";

const CONTEXT_KEY = "b035329988178407e";

const useGoogleSearch = (searchTerm: any) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${searchTerm}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    
    fetchData();
  }, [searchTerm]);

  return data;
};

export default useGoogleSearch;
