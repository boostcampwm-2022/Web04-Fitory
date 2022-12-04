import React from "react";
import {
  NUMBER_OF_DAYS,
  HEAT_ITEM_SIZE,
  HEAT_ITEM_RADIUS,
  HEAT_ITEM_DISTANCE,
} from "@constants/consts";
import { FormatMonth, ExerciseState } from "@constants/enums";
import getCalendarHeatMapArray from "@utils/getCalendarHeatMapArray";
import getExerciseStateForOneYear from "@utils/getExerciseStateForOneYear";
import Paper from "@components/design/Paper";
import useAllExerciseDate from "@hooks/query/useAllExerciseDate";
import useRecentChallengeTime from "@hooks/query/useRecentChallengeTime";
import * as s from "./style";

interface HeatItemProps {
  exerciseState: ExerciseState;
  x: number;
  y: number;
}

const HeatItem = ({ exerciseState, x, y }: HeatItemProps) => {
  return (
    <s.HeatItem
      x={`${x}`}
      y={`${y}`}
      rx={HEAT_ITEM_RADIUS}
      ry={HEAT_ITEM_RADIUS}
      exerciseState={exerciseState}
    />
  );
};

const CalendarHeatMap = () => {
  const { nowTimeStamp } = useRecentChallengeTime();
  const { exerciseDateList } = useAllExerciseDate();

  const heatMapArray = getCalendarHeatMapArray(nowTimeStamp);
  const exerciseStateList = [
    ...getExerciseStateForOneYear(nowTimeStamp.getFullYear() - 1, exerciseDateList),
    ...getExerciseStateForOneYear(nowTimeStamp.getFullYear(), exerciseDateList),
  ];

  const isNeedMonthLabel = (i: number) => {
    return !i || heatMapArray[i - 1][0].month < heatMapArray[i][0].month;
  };

  return (
    <Paper style={{ width: "100%" }}>
      <s.Wrapper>
        {/* <s.Year>{year}</s.Year> */}
        <s.HeatMap>
          <svg
            width={HEAT_ITEM_SIZE * heatMapArray.length}
            height={HEAT_ITEM_SIZE * (HEAT_ITEM_DISTANCE + NUMBER_OF_DAYS)}
          >
            {heatMapArray.map((week, x) => (
              <React.Fragment key={`${week[0].month}-${week[0].day}`}>
                {/* Month Label */}
                {isNeedMonthLabel(x) && (
                  <text
                    key={FormatMonth[week[0].month]}
                    x={x * HEAT_ITEM_SIZE}
                    y={`${HEAT_ITEM_SIZE}`}
                  >
                    {FormatMonth[week[0].month]}
                  </text>
                )}
                {/* Heat Map */}
                {week.map(({ month, day }, y) => (
                  <HeatItem
                    key={day ? `${month}-${day}` : `empty${y}`}
                    exerciseState={exerciseStateList[month - 1][day - 1]}
                    x={x * HEAT_ITEM_SIZE}
                    y={(y + HEAT_ITEM_DISTANCE) * HEAT_ITEM_SIZE}
                  />
                ))}
              </React.Fragment>
            ))}
          </svg>
        </s.HeatMap>
      </s.Wrapper>
    </Paper>
  );
};

export default CalendarHeatMap;
