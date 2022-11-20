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
  const year = new Date().getFullYear();
  const heatMapArray = getCalendarHeatMapArray(year);
  const exerciseStateList = getExerciseStateForOneYear(year, [
    "220103",
    "220104",
    "220107",
    "220111",
  ]);

  const isNeedMonthLabel = (i: number) => {
    return !i || heatMapArray[i - 1][0].month < heatMapArray[i][0].month;
  };

  return (
    <s.Wrapper>
      <s.Year>{year}</s.Year>
      <s.HeatMap>
        <svg
          width={HEAT_ITEM_SIZE * heatMapArray.length}
          height={HEAT_ITEM_SIZE * (HEAT_ITEM_DISTANCE + NUMBER_OF_DAYS)}
        >
          {heatMapArray.map((week, x) => (
            <>
              {/* Month Label */}
              {isNeedMonthLabel(x) && (
                <text x={x * HEAT_ITEM_SIZE} y={`${HEAT_ITEM_SIZE}`}>
                  {FormatMonth[week[0].month]}
                </text>
              )}
              {/* Heat Map */}
              {week.map(({ month, day }, y) => {
                return (
                  <HeatItem
                    exerciseState={exerciseStateList[month - 1][day - 1]}
                    x={x * HEAT_ITEM_SIZE}
                    y={(y + HEAT_ITEM_DISTANCE) * HEAT_ITEM_SIZE}
                  />
                );
              })}
            </>
          ))}
        </svg>
      </s.HeatMap>
    </s.Wrapper>
  );
};

export default CalendarHeatMap;
