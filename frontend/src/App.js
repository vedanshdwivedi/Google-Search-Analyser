import React, { useState, useEffect, Component } from "react";
import "./App.css";

import BarChart from "./components/BarChart";

const App = () => {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    fetch("/members")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  });
  return (
    <div>
      Hello Bar Charts
      <BarChart />
    </div>
  );
};

export default App;
