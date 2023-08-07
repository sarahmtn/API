import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "../src/CSS/Style.css";

const url = "https://newsapi.org/v2/everything";
const apiKey = "4783a4766727469eb9e05693ae480b9d";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("tesla");

  useEffect(() => {
    getData();
  }, [query]);

  const getData = () => {
    axios
      .get(url, {
        params: {
          q: query,
          from: "2023-08-03",
          sortBy: "publishedAt",
          apiKey: apiKey,
        },
      })
      .then((response) => {
        const dataArray = [];
        response.data.articles.forEach((dataObj) => {
          dataArray.push(
            <div key={dataObj.publishedAt}>
              <div className="news">
                <p>{dataObj.title}</p>
                <p>{dataObj.description}</p>
              </div>
            </div>
          );
        });
        setData(dataArray);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleButtonClick = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <div>
      <center>
        <h1 className="page-title">News</h1>
        <select
          value={query}
          onChange={handleQueryChange}
          className="SelectNews"
        >
          <option value="tesla">Tesla</option>
          <option value="water">Water</option>
          <option value="bitcoin">Bitcoin</option>
        </select>
        <button className="button" onClick={() => handleButtonClick("tesla")}>
          Tesla
        </button>
        <button className="button" onClick={() => handleButtonClick("water")}>
          water
        </button>
        <button className="button" onClick={() => handleButtonClick("bitcoin")}>
          Bitcoin
        </button>
        <div className="total">
          <p className="pnews">{data.slice(0, 10)}</p>
        </div>
      </center>
    </div>
  );
}

export default App;
