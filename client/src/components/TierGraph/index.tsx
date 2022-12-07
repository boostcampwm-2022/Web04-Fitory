import React, { useEffect, useState } from "react";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import { judColors } from "@components/TierGraph/utils";
import options from "./option";
import plugin from "./plugin";
import mockData from "./mockData";
import * as s from "./style";

Chart.register(...registerables);

interface MockDataType {
  date: string;
  score: number;
}

const backgroundColorArray: string[] = [];

const TierGraph = () => {
  const [labelInfo, setLabelInfo] = useState<string[]>([]);
  const [dataInfo, setDataInfo] = useState<number[]>([]);

  const graphData = {
    labels: labelInfo,
    datasets: [
      {
        data: dataInfo,
        backgroundColor: backgroundColorArray,
        borderColor: backgroundColorArray,
        pointBorderColor: backgroundColorArray,
        fill: false,
        tension: 0,
        pointBorderWidth: 0,
        borderWidth: 1.5,
      },
    ],
  };

  useEffect(() => {
    const dates: string[] = [];
    const scores: number[] = [];
    mockData.forEach((item: MockDataType) => {
      dates.push(item.date);
      scores.push(item.score);
      backgroundColorArray.push(judColors(item.score));
    });
    setLabelInfo(dates);
    setDataInfo(scores);
  }, []);

  return (
    <s.Wrapper>
      <Line data={graphData} plugins={plugin} options={options} />
    </s.Wrapper>
  );
};

export default TierGraph;
