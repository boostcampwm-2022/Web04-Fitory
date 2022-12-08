import React from "react";
import { ChartData, ChartOptions } from "chart.js";
import { Bar } from "react-chartjs-2";
import useUserInfo from "@hooks/query/useUserInfo";
import useWeightClassStatistics from "@hooks/query/useWeightClassStatistics";
import { WEIGHT_CLASS_STATISTICS_RANGE } from "@constants/consts";
import { authStorage } from "src/services/ClientStorage";

const options: ChartOptions = {
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: "3대 챌린지 중량별 인원 분포",
    },
  },
};

const WeightClassHistogram = () => {
  const { userInfo } = useUserInfo(authStorage.get());
  const { weightClassStatistics } = useWeightClassStatistics({
    range: WEIGHT_CLASS_STATISTICS_RANGE,
    weight: userInfo.weight,
    gender: userInfo.gender,
  });

  const data: ChartData<"bar", number[], string> = {
    labels: weightClassStatistics.responseData.map(({ x_start }) => x_start.toString()),
    datasets: [
      {
        type: "bar",
        label: "인원 수",
        backgroundColor: "#ffb3c2",
        data: weightClassStatistics.responseData.map(({ y }) => y),
        borderColor: "#ff6384",
        borderWidth: 2,
      },
    ],
  };

  return (
    <Bar options={options} data={data}>
      test
    </Bar>
  );
};

export default WeightClassHistogram;
