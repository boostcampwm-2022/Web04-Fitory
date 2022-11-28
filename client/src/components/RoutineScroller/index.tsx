import React from "react";
import Paper from "@components/design/Paper";
import CardsScroller from "@components/design/CardsScroller";
import { UserName } from "src/types/user";
import * as s from "./style";

interface RoutineScrollerProps {
  userName: UserName;
  routineList: string[];
}

const RoutineScroller = ({ userName, routineList }: RoutineScrollerProps) => {
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
