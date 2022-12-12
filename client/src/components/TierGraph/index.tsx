import React, { useEffect, useState } from "react";
import { Chart, registerables, Plugin } from "chart.js";
import { Line } from "react-chartjs-2";
import { AnyObject } from "immer/dist/types/types-internal";
import useChallengeHistory from "@hooks/query/challenge/useChallengeHistory";
import { ChallengeHistoryList } from "src/types/challenge";

import { judColors } from "./utils";
import options from "./option";
import plugin from "./plugin";
import * as s from "./style";

Chart.register(...registerables);

const backgroundColorArray: string[] = [];

const TierGraph = () => {
  const { challengeHistory } = useChallengeHistory();
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
    challengeHistory.forEach((item: ChallengeHistoryList) => {
      const { timeStamp, SBD_sum: SBDSum } = item.record;
      const date = new Date(timeStamp).toISOString().substring(0, 10).replace(/-/g, "");
      dates.push(date);
      scores.push(SBDSum);
      backgroundColorArray.push(judColors(SBDSum));
    });
    setLabelInfo(dates);
    setDataInfo(scores);
  }, [challengeHistory]);

  return challengeHistory.length ? (
    <Line data={graphData} plugins={plugin as Plugin<"line", AnyObject>[]} options={options} />
  ) : (
    <s.DefaultContainer> 표시할 티어 정보가 없습니다. </s.DefaultContainer>
  );
};

export default TierGraph;
