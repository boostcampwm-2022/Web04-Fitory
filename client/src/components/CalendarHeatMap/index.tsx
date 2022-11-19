import React from "react";
import {
  NUMBER_OF_DAYS,
  HEAT_ITEM_SIZE,
  HEAT_ITEM_RADIUS,
  HEAT_ITEM_DISTANCE,
} from "@constants/consts";
import { FormatMonth } from "@constants/enums";
import getCalendarHeatMapArray from "@utils/getCalendarHeatMapArray";
import * as s from "./style";

interface HeatItemProps {
  month: number;
  day: number;
  x: number;
  y: number;
}

const HeatItem = ({ month, day, x, y }: HeatItemProps) => {
  return (
    <s.HeatItem
      x={`${x}`}
      y={`${y}`}
      rx={HEAT_ITEM_RADIUS}
      ry={HEAT_ITEM_RADIUS}
      isEmpty={Boolean(!day)}
    />
  );
};

const CalendarHeatMap = () => {
  const year = new Date().getFullYear();
  const heatMapArray = getCalendarHeatMapArray(year);

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
              {week.map(({ month, day }, y) => (
                <HeatItem
                  month={month}
                  day={day}
                  x={x * HEAT_ITEM_SIZE}
                  y={(y + HEAT_ITEM_DISTANCE) * HEAT_ITEM_SIZE}
                />
              ))}
            </>
          ))}
        </svg>
      </s.HeatMap>
    </s.Wrapper>
  );
};

export default CalendarHeatMap;
