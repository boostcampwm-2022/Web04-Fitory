import React, { useEffect, useState } from "react";
import { Chart, registerables, Plugin } from "chart.js";
import { Line } from "react-chartjs-2";
import { judColors } from "@components/TierGraph/utils";
import { AnyObject } from "immer/dist/types/types-internal";
import ExerciseAPI from "@api/ExerciseAPI";
import options from "./option";
import plugin from "./plugin";
import { SDBRecordHistoryArray } from "../../types/exercise";
import * as s from "./style";

Chart.register(...registerables);

const backgroundColorArray: string[] = [];

const TierGraph = () => {
  const [labelInfo, setLabelInfo] = useState<string[]>([]);
  const [dataInfo, setDataInfo] = useState<number[]>([]);
  const [userExerciseHistory, setUserExerciseHistory] = useState<SDBRecordHistoryArray[]>([]);

  useEffect(() => {
    (async () => {
      const historyList = await ExerciseAPI.getEveryDayHistory();
      setUserExerciseHistory(historyList);
    })();
  }, []);

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
    userExerciseHistory.forEach((item: SDBRecordHistoryArray) => {
      const { record } = item;
      const date = new Date(record.timeStamp).toISOString().substring(0, 10).replace(/-/g, "");
      dates.push(date);
      scores.push(record.SBD_sum);
      backgroundColorArray.push(judColors(record.SBD_sum));
    });
    setLabelInfo(dates);
    setDataInfo(scores);
  }, [userExerciseHistory]);

  return userExerciseHistory.length ? (
    <Line data={graphData} plugins={plugin as Plugin<"line", AnyObject>[]} options={options} />
  ) : (
    <s.DefaultContainer> 표시할 티어 정보가 없습니다. </s.DefaultContainer>
  );
};

export default TierGraph;
