import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../../components/search/SearchBar";
import Submit from "../../components/submit";
import "./landing.css";

export default function LandingPage() {
  const defaultSearchObj = {
    source: "",
    destination: "",
  };

  const [locationObj, setLocationObj] = useState(defaultSearchObj);
  const [locationList, setLocationList] = useState([]);

  const handleLocationChange = (key, value) => {
    let obj = Object.assign({}, locationObj);
    obj[key] = value;
    setLocationObj(obj);
  };

  const handleSubmit = async () => {
    const res = await axios.post("http://localhost:4000", locationObj);
    console.log("Aastha => ", res);
  };

  const fetchData = async () => {
    await axios
      .get("http://localhost:4000/stop/get-all-bus-stops")
      .then((res) => {
        const response = res;
        if (response?.status === 200) {
          if (response?.data?.res) {
            const mappedData = response?.data?.res.map((record) => {
              return {
                value: record?._id,
                label: record?.name,
              };
            });
            setLocationList(mappedData);
          }
        }
      })
      .catch((err) => {
        console.log("Error => ".error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="navbar">Navbar</div>

      <div className="searchContent">
        <div className="searchSource">
          <SearchBar
            type="source"
            options={locationList}
            currentValue={locationObj?.source}
            handleChange={handleLocationChange}
            placeHolder={`Enter Source Location`}
          />
        </div>
        <div className="searchSource">
          <SearchBar
            type="destination"
            options={locationList}
            currentValue={locationObj?.destination}
            handleChange={handleLocationChange}
            placeHolder={`Enter Destination Location`}
          />
        </div>

        <div className="submit" onClick={handleSubmit}>
          <Submit text="Search"></Submit>
        </div>
      </div>
    </>
  );
}
