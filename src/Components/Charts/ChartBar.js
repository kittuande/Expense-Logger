import "./ChartBar.css";
import React from "react";
const ChartBar = (props) => {
  let barHeight = "0%";
  if (props.maxValue !== 0) {
    barHeight = Math.floor((props.value / props.maxValue) * 100) + "%";
  }
  console.log(props.maxValue);
  // console.log(barHeight);

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barHeight }}></div>
      </div>
      <div className="chart-bar__label">{props.title}</div>
    </div>
  );
};

export default ChartBar;
