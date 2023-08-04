import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const url =
    "https://newsapi.org/v2/everything?q=tesla&from=2023-08-03&sortBy=publishedAt&apiKey=4783a4766727469eb9e05693ae480b9d";
  const [data, setData] = useState([]);

  const getData = () => {
    return axios.get(url).then((res) => setData(res.data.articles));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1 style={{ color: "purple", textAlign: "center" }}>News</h1>
      <center>
        {data.slice(0, 5).map((dataObj, index) => {
          return (
            <div
              style={{
                width: "40em",
                backgroundColor: "violet",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              <p style={{ fontSize: 13, color: "white" }}>{dataObj.title}</p>
              <p style={{ fontSize: 13, color: "white" }}>
                {dataObj.description}
              </p>
            </div>
          );
        })}
      </center>
    </div>
  );
}

export default App;
