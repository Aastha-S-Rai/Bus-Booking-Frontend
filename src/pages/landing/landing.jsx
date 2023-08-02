import React, { useState } from "react";
import SearchBar from "../../components/search/SearchBar";
import SearchResults from "../../components/search/SearchResults";

export default function LandingPage() {
  const [showResult, setShowResult] = useState();

  return (
    <>
      <div className="navbar">Navbar</div>

      <div className="searchContent">
        <div className="searchSource">
          <SearchBar placeHolder={`Source`} name={`source`} />
          <SearchResults setResults={setShowResult}/>
          <div className="selectOptions"></div>
        </div>
        <div className="searchDestination">
          <SearchBar placeHolder={`Destination`} name={`destination`} />
          <SearchResults />
        </div>
      </div>
    </>
  );
}
