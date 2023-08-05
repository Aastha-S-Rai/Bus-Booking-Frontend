import React from "react";

export const SearchResults = (props) => {
  const { results = [], onOptionSelect } = props;

  return (
    <>
      <div className="results">
        {results.map((result, id) => {
          return (
            <div
              onClick={() => {
                onOptionSelect(result?.name);
              }}
              className="resultContent"
              key={id}
            >
              {" "}
              {result?.name}{" "}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchResults;
