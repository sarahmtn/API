import axios from "axios";

export const setData = (data) => ({
  type: "SET_DATA",
  payload: data,
});

export const setQuery = (query) => ({
  type: "SET_QUERY",
  payload: query,
});

export const fetchData = (query) => (dispatch) => {
  axios
    .get(
      "https://newsapi.org/v2/everything?q=" +
        query +
        "&from=2023-08-03&sortBy=publishedAt&apiKey=4783a4766727469eb9e05693ae480b9d"
    )
    .then((response) => {
      const dataArray = response.data.articles;
      dispatch(setData(dataArray));
    })
    .catch((error) => {
      console.error(error);
    });
};
