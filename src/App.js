import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "../src/CSS/Style.css";

const url =
  "https://newsapi.org/v2/everything?q=tesla&from=2023-08-03&sortBy=publishedAt&apiKey=4783a4766727469eb9e05693ae480b9d";

function App() {
  const [data, setData] = useState([]);

  const getData = () => {
    return axios.get(url).then((res) => setData(res.data.articles));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <center>
        <h1 className="page-title">News</h1>
        <div className="total">
          {data.slice(0, 10).map((dataObj, index) => {
            return (
              <div key={dataObj.publishedAt}>
                <div className="news">
                  <p>{dataObj.title}</p>
                  <p>{dataObj.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </center>
    </div>
  );
}
export default App;
