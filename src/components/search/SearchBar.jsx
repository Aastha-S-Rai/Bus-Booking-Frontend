import React from "react";
import { FormGroup, Input } from "reactstrap";
import "./styles.css";

export const SearchBar = (props) => {
  const { placeHolder = "Search ...", handleChange, currentValue = "" } = props;

  return (
    <>
      <FormGroup>
        <Input
          id="search"
          type="text"
          placeholder={placeHolder}
          value={currentValue}
          onChange={handleChange}
        />
      </FormGroup>
    </>
  );
};

export default SearchBar;
