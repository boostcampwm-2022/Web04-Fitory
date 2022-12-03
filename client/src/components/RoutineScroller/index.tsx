import React from "react";
import Paper from "@components/design/Paper";
import CardsScroller from "@components/design/CardsScroller";
import useUserInfo from "@hooks/query/useUserInfo";
import useRoutineList from "@hooks/query/useRoutineList";
import { UserId } from "src/types/user";
import * as s from "./style";

const RoutineScroller = ({ userId }: { userId: UserId }) => {
  const { userInfo } = useUserInfo(userId);
  const { routineList } = useRoutineList(userId);

  return (
    <s.Wrapper>
      <s.Label>
        <span>{userInfo.name}</span>님의 운동 루틴
      </s.Label>
      <CardsScroller>
        {routineList?.map((routine) => (
          <Paper key={routine} shadow={2} hover>
            <s.RoutineButton>{routine}</s.RoutineButton>
          </Paper>
        ))}
      </CardsScroller>
    </s.Wrapper>
  );
};

export default RoutineScroller;
