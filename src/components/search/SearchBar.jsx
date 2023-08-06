import React from "react";
import Select from "react-select";
import "./styles.css";

export const SearchBar = (props) => {
  const {
    type = "source",
    options = [],
    currentValue = "",
    handleChange,
    placeHolder = "Search Location",
  } = props;

  return (
    <>
      <Select
        key={type}
        defaultValue={currentValue}
        onChange={(e) => {
          handleChange(type, e.value);
        }}
        options={options}
        placeholder={placeHolder}
      />
    </>
  );
};

export default SearchBar;
