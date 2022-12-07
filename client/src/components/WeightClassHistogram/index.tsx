import React from "react";
import { ChartData, ChartOptions } from "chart.js";
import { Bar } from "react-chartjs-2";
import * as s from "./style";

const data: ChartData<"bar", number[], string> = {
  labels: [
    "280kg-290kg",
    "280kg-290kg",
    "280kg-290kg",
    "280kg-290kg",
    "280kg-290kg",
    "280kg-290kg",
    "280kg-290kg",
    "280kg-290kg",
    "280kg-290kg",
    "280kg-290kg",
    "280kg-290kg",
    "280kg-290kg",
    "280kg-290kg",
    "280kg-290kg",
    "280kg-290kg",
    "280kg-290kg",
    "280kg-290kg",
    "280kg-290kg",
    "280kg-290kg",
    "280kg-290kg",
    "280kg-290kg",
    "280kg-290kg",
    "280kg-290kg",
    "280kg-290kg",
  ],
  datasets: [
    {
      type: "bar",
      label: "인원 수",
      backgroundColor: "rgb(255, 99, 132)",
      data: [
        33, 9, 44, 55, 60, 22, 65, 23, 123, 56, 6, 23, 33, 9, 44, 55, 60, 22, 65, 23, 123, 56, 6,
        23,
      ],
      borderColor: "red",
      borderWidth: 2,
    },
  ],
};

const options: ChartOptions = {
  indexAxis: "y",
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: "3대 챌린지 중량별 인원 분포",
    },
  },
};

const WeightClassHistogram = () => {
  return (
    <s.Wrapper>
      <Bar options={options} data={data}>
        test
      </Bar>
    </s.Wrapper>
  );
};

export default WeightClassHistogram;
