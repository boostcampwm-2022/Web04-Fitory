import React from "react";
import { ChartData, ChartOptions, ScriptableContext, ChartTypeRegistry } from "chart.js";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";
import useUserInfo from "@hooks/query/useUserInfo";
import useBestChallengeScore from "@hooks/query/useBestChallengeScore";
import useWeightClassStatistics from "@hooks/query/useWeightClassStatistics";
import { WEIGHT_CLASS_STATISTICS_RANGE } from "@constants/consts";
import { authStorage } from "src/services/ClientStorage";

const XLabel = styled.p`
  margin-top: 15px;
`;

const checkMyBarItem = (ctx: ScriptableContext<keyof ChartTypeRegistry>, myBestScore: number) => {
  const { labels } = ctx.chart.data;

  if (!labels || labels.length - 1 < ctx.dataIndex) {
    return false;
  }

  const score = +(labels[ctx.dataIndex] as string);
  return score <= myBestScore && myBestScore < score + WEIGHT_CLASS_STATISTICS_RANGE;
};

const WeightClassHistogram = () => {
  const { userInfo } = useUserInfo(authStorage.get());
  const { bestChallengeScore } = useBestChallengeScore();

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
        data: weightClassStatistics.responseData.map(({ y }) => y),
        borderWidth: 2,
      },
      {
        type: "bar",
        label: "내 소속",
        data: [],
        borderWidth: 2,
        borderColor: "#37a2eb",
        backgroundColor: "#a0d0f6",
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    maintainAspectRatio: false,
    elements: {
      bar: {
        backgroundColor: (ctx) =>
          checkMyBarItem(ctx, bestChallengeScore?.SBD_sum || 0) ? "#a0d0f6" : "#ffb3c2",
        borderColor: (ctx) =>
          checkMyBarItem(ctx, bestChallengeScore?.SBD_sum || 0) ? "#37a2eb" : "#ff6384",
      },
    },
    scales: {
      x: {
        stacked: true,
      },
    },
  };

  return (
    <>
      <Bar options={options} data={data}>
        test
      </Bar>
      <XLabel>3대 챌린지 중량 합 (kg)</XLabel>
    </>
  );
};

export default WeightClassHistogram;
