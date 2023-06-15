import React from "react";
import Chart from "./Chart";
import jsonData from "../assets/data.json";

const Charts = () => {
  const data = jsonData;

  const findMax = data.map((value) => {
    let number = 0;
    if (number === 0) {
      number = value.amount;
    } else if (number < value.amount) {
      number = value.amount;
    }
    return number;
  });

  const MaxNanber = Math.max(...findMax);
  const indexMax = findMax.indexOf(MaxNanber);

  return (
    <div className="charts">
      {data.map((item, index) =>
        index === indexMax ? (
          <Chart
            key={index}
            Max
            day={item.day}
            amout={item.amount}
            deley={index}
          />
        ) : (
          <Chart
            key={index}
            day={item.day}
            amout={item.amount}
            deley={index }
          />
        )
      )}
    </div>
  );
};

export default Charts;
