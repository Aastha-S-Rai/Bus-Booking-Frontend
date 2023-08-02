import React, { useState } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import "./styles.css";

export const SearchBar = (props) => {
  const { placeHolder = "Search" } = props;
  const { setResults } = props;
  const { name = "source" } = props;

  const defaultFormat = {
    name: "",
    value: "",
  };
  const [searchData, newSearchData] = useState(defaultFormat);

  const handleChange = (name, value) => {
    const obj = new searchData();
    obj["name"] = name;
    obj["value"] = value;
    newSearchData(obj);
    fetchData();
  };

  const fetchData = async () => {
    const res = await axios.post(
      "http://localhost:4000/stops/search",
      searchData
    );
    console.log(res);
    setResults(res);
  };
  return (
    <>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="text"
          name={name}
          id="search"
          placeholder={placeHolder}
          value={searchData}
          onChange={(e) => {
            handleChange(name, e.target.value);
          }}
        />
      </FormGroup>
    </>
  );
};

export default SearchBar;
