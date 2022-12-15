import React, { useEffect, useState } from "react";
import { Chart, registerables, Plugin } from "chart.js";
import { Line } from "react-chartjs-2";
import { AnyObject } from "immer/dist/types/types-internal";
import useUserInfo from "@hooks/query/user/useUserInfo";
import useChallengeHistory from "@hooks/query/challenge/useChallengeHistory";
import { ChallengeHistoryList } from "src/types/challenge";
import { authStorage } from "src/services/ClientStorage";
import { TierName } from "@constants/enums";
import { judColors, judLine } from "./utils";
import drawChartOption from "./option";
import plugin from "./plugin";
import * as s from "./style";

Chart.register(...registerables);

const backgroundColorArray: string[] = [];

const TierGraph = () => {
  const { userInfo } = useUserInfo(authStorage.get());
  const { challengeHistory } = useChallengeHistory();
  const [labelInfo, setLabelInfo] = useState<string[]>([]);
  const [dataInfo, setDataInfo] = useState<number[]>([]);
  const [bestTierWeight, setBestTierWeight] = useState<number>();

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
    let bestTierWeightStandard = 0;
    let bestTier = 0;
    const dates: string[] = [];
    const scores: number[] = [];
    challengeHistory.forEach((item: ChallengeHistoryList) => {
      const { timeStamp, userWeight, SBD_sum: SBDSum } = item.record;
      const date = new Date(timeStamp).toISOString().substring(2, 10).replace(/-/g, "");
      dates.push(date);
      scores.push(SBDSum);
      backgroundColorArray.push(judColors(SBDSum, userInfo.weight));
      const userTier: number = judLine(SBDSum, userWeight);
      if (userTier >= bestTier) {
        bestTier = userTier;
        bestTierWeightStandard = userWeight;
      }
    });
    setLabelInfo(dates);
    setDataInfo(scores);
    setBestTierWeight(bestTierWeightStandard);
  }, [challengeHistory, userInfo.weight]);

  return challengeHistory.length ? (
    <>
      <s.UserBestTierContainer>
        <s.TierLabel>나의 최고 티어 ({bestTierWeight}kg 기준)</s.TierLabel>
        <s.Tier tier={userInfo.tier ? TierName[userInfo.tier] : null}>
          {userInfo.tier ? TierName[userInfo.tier] : "-"}
        </s.Tier>
      </s.UserBestTierContainer>
      <s.ChartArea>
        <s.Caption>현재 체중 {userInfo.weight}kg 기준</s.Caption>
        <Line
          data={graphData}
          plugins={plugin(userInfo.weight) as Plugin<"line", AnyObject>[]}
          options={drawChartOption(dataInfo, userInfo.weight)}
        />
      </s.ChartArea>
    </>
  ) : (
    <s.DefaultContainer>표시할 티어 정보가 없습니다.</s.DefaultContainer>
  );
};

export default TierGraph;
