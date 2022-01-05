import React from "react";
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar, Chart } from "react-chartjs-2";

export const RegionGraph = ({ regionDataDict }) => {
  return (
    <div>
      <Bar
        data={{
          labels: regionDataDict.labels,
          datasets: [
            {
              label: regionDataDict.property,
              data: regionDataDict.series,
            },
          ],
        }}
      />
    </div>
  );
};
