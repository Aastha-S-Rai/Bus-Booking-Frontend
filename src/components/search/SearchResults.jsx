import React, { useState } from "react";
import { FormGroup, Label, Input } from "reactstrap";

export const SearchResults = (props) => {
    const {results} = props;
  return (
    <>
      <div className="results">
        {results.map((result, id)=> {
          return <div key={id}> {result.name} </div>
        })}
      </div>
    </>
  );
};

export default SearchResults;
