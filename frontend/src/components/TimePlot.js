import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line, Chart } from "react-chartjs-2";

export const TimeGraph = ({ timeDataDict }) => {
  return (
    <div>
      <Line
        data={{
          labels: timeDataDict.labels,
          datasets: [
            {
              label: timeDataDict.property,
              data: timeDataDict.series,
            },
          ],
        }}
      />
    </div>
  );
};
