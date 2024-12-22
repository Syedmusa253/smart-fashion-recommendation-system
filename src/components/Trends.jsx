import { useState } from "react";
import CardsList from "./CardsList.jsx";
import { useLoaderData } from "react-router-dom";
const Trends = () => {
  const trendList = useLoaderData();
  const [weather, changeWeather] = useState("summer");
  const currentWeather = (event) => {
    changeWeather(event.target.value);
  };
  return (
    <div className="trends_box">
      <div className="trends_first">
        <div className="sub_first">In the last 30 days,</div>
        <select
          className="form-select "
          id="validationCustom04"
          onChange={currentWeather}
          defaultValue="summer"
          required
        >
          <option value="summer">Summer</option>
          <option value="winter">Winter</option>
        </select>
      </div>
      <div className="trends_first">
        <h2 className="center_trend">Trends</h2>
      </div>
      <CardsList trendList={trendList} weather={weather}></CardsList>
    </div>
  );
};
export const PostLoader = () => {
  return fetch("http://localhost:3550/trends")
    .then((res) => res.json())
    .then((trendList) => {
      return trendList.data;
    })
    .catch((error) => {
      console.log("there is an error while sign-up data", error);
    });
};
export default Trends;
