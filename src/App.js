import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./CSS/Style.css";
import axios from "axios";

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const [query, setQuery] = useState("tesla");
  const [savedNews, setSavedNews] = useState("");

  useEffect(() => {
    getData();
    localStorage.setItem("savedNews", JSON.stringify(savedNews));
  }, [query, savedNews]);

  const getData = () => {
    axios
      .get(
        "http://newsapi.org/v2/everything?q=" +
          query +
          "&from=2023-08-03&sortBy=publishedAt&apiKey=4783a4766727469eb9e05693ae480b9d"
      )
      .then((response) => {
        const dataArray = response.data.articles;
        dispatch({
          type: "SET_DATA",
          payload: dataArray,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleCheckboxChange = (event, title) => {
    if (event.target.checked) {
      setSavedNews((prevSavedNews) => [...prevSavedNews, title]);
    } else {
      setSavedNews((prevSavedNews) =>
        prevSavedNews.filter((item) => item !== title)
      );
    }
  };
  let newsView = useMemo(() => {
    let _data = [];
    data.slice(0, 10).forEach((dataObj, index) => {
      _data.push(
        <div className="total">
          <div key={dataObj.publishedAt + "-" + index} className="news">
            <label>
              <input
                type="checkbox"
                onChange={(event) => handleCheckboxChange(event, dataObj.title)}
              />
              Save This News
            </label>
            <p>{dataObj.title}</p>
            <p>{dataObj.description}</p>
          </div>
        </div>
      );
    });

    return _data;
  }, [data]);

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
        <div className="divnews">{newsView.map((item) => item)}</div>
      </center>
    </div>
  );
};

export default App;
