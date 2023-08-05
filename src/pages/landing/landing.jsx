import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../../components/search/SearchBar";
import SearchResults from "../../components/search/SearchResults";
import "./landing.css";
import Submit from "../../components/submit";

export default function LandingPage() {
  const defaultSearchObj = {
    source: "",
    destination: "",
  };
  const [location, setLocation] = useState(defaultSearchObj);

  const [sourceResult, setSourceResult] = useState([]);
  const [destinationResult, setDestinationResult] = useState([]);

  const handleLocationChange = (key, value) => {
    let obj = Object.assign({}, location);
    obj[key] = value;
    console.log(key+"===>"+value)
    setLocation(obj);
  };

  const handleSourceChange = (e) =>
    handleLocationChange("source", e.target.value);

  const handleDestinationChange = (e) =>
    handleLocationChange("destination", e.target.value);

  const handleSubmit = async () => {
    const res = await axios.post("http://localhost:4000", location);
    console.log("Aastha => ", res);
  }

  const fetchData = async (search_text, search_type) => {
    if (!search_text) {
      if (search_type === "source") {
        setSourceResult([]);
      }
      if (search_type === "destination") {
        setDestinationResult([]);
      }
      return;
    }

    const payload = {
      name: search_text,
    };

    await axios
      .post("http://localhost:4000/stop/search", payload)
      .then((res) => {
        const response = res;
        if (response?.status === 200) {
          if (response?.data?.res) {
            if (search_type === "source") {
              setSourceResult(response?.data?.res);
            }
            if (search_type === "destination") {
              setDestinationResult(response?.data?.res);
            }
          }
        }
      })
      .catch((err) => {
        console.log("Error => ".error);
      });
  };

  const handleSourceLocationSelect = (value) => {
    handleLocationChange("source", value);
    setSourceResult([]);
  };

  const handleDestinationLocationSelect = (value) => {
    handleLocationChange("destination", value);
    setDestinationResult([]);
  };

  useEffect(() => {
    fetchData(location?.source, "source");
  }, [location?.source]);

  useEffect(() => {
    fetchData(location?.destination, "destination");
  }, [location?.destination]);

  return (
    <>
      <div className="navbar">Navbar</div>

      <div className="searchContent">
        <div className="searchSource">
          <SearchBar
            placeHolder={`Enter Source Location`}
            handleChange={handleSourceChange}
            currentValue={location?.source}
          />
          <div className="result">
            <SearchResults
              results={sourceResult}
              onOptionSelect={handleSourceLocationSelect}
            />
          </div>
        </div>
        <div className="searchSource">
          <SearchBar
            placeHolder={`Enter Destination Location`}
            handleChange={handleDestinationChange}
            currentValue={location?.destination}
          />
          <div className="result">
            <SearchResults
              results={destinationResult}
              onOptionSelect={handleDestinationLocationSelect}
            />
          </div>
        </div>
        <div
          className="submit"
          onClick={handleSubmit}
        >
          <Submit text="Search" ></Submit>
        </div>
      </div>
    </>
  );
}
