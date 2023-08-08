import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, setQuery } from "./store/action";
import style from "./CSS/Style.css";

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const query = useSelector((state) => state.query);

  useEffect(() => {
    dispatch(fetchData(query));
  }, [query, dispatch]);

  const handleQueryChange = (event) => {
    dispatch(setQuery(event.target.value));
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
        <div className="total">
          <div className="pnews">
            {data.slice(0, 10).map((dataObj) => (
              <div key={dataObj.publishedAt} className="news">
                <p className="pnews">{dataObj.title}</p>
                <p className="pnews">{dataObj.description}</p>
              </div>
            ))}
          </div>
        </div>
      </center>
    </div>
  );
};

export default App;
