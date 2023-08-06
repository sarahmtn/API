import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "../src/CSS/Style.css";

const url =
  "https://newsapi.org/v2/everything?q=tesla&from=2023-08-03&sortBy=publishedAt&apiKey=4783a4766727469eb9e05693ae480b9d";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(url)
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

  return (
    <div>
      <center>
        <h1 className="page-title">News</h1>
        <div className="total">
          <p className="pnews">{data.slice(0, 10)}</p>
        </div>
      </center>
    </div>
  );
}

export default App;
