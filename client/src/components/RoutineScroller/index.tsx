import React from "react";
import Paper from "@components/design/Paper";
import CardsScroller from "@components/design/CardsScroller";
import * as s from "./style";

const RoutineScroller = () => {
  const userName = "대구사나이김동규";
  const routineList = ["등", "가슴", "어께", "하체"];

  return (
    <s.Wrapper>
      <s.Label>
        <span>{userName}</span>님의 운동 루틴
      </s.Label>
      <CardsScroller>
        {routineList.map((routine) => (
          <Paper key={routine} shadow={2} hover>
            <s.RoutineButton>{routine}</s.RoutineButton>
          </Paper>
        ))}
      </CardsScroller>
    </s.Wrapper>
  );
};

export default RoutineScroller;
