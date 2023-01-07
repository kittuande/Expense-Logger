import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  return (
    <div className="chart">
      {props.months.map((m) => (
        <ChartBar
          key={m.month}
          title={m.month}
          value={m.value}
          maxValue={props.totalAmount}
        />
      ))}
      ;
    </div>
  );
};

export default Chart;
