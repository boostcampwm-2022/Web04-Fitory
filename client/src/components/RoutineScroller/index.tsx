import React from "react";
import routineSrc1 from "@public/images/btn_routine_1.png";
import routineSrc2 from "@public/images/btn_routine_2.png";
import routineSrc3 from "@public/images/btn_routine_3.png";
import routineSrc4 from "@public/images/btn_routine_4.png";
import routineSrc5 from "@public/images/btn_routine_5.png";
import routineSrc6 from "@public/images/btn_routine_6.png";
import Paper from "@components/design/Paper";
import CardsScroller from "@components/design/CardsScroller";
import useUserInfo from "@hooks/query/useUserInfo";
import useRoutineList from "@hooks/query/useRoutineList";
import theme from "@styles/Theme";
import { UserId } from "src/types/user";
import * as s from "./style";

interface RoutineScrollerProps {
  userId: UserId;
  onClickRoutineItem: (routineName: string) => void;
}

const routineSrcList = [
  routineSrc1,
  routineSrc2,
  routineSrc3,
  routineSrc4,
  routineSrc5,
  routineSrc6,
];

const RoutineScroller = ({ userId, onClickRoutineItem }: RoutineScrollerProps) => {
  const { userInfo } = useUserInfo(userId);
  const { routineList } = useRoutineList(userId);

  return (
    <s.Wrapper>
      <s.Label>
        <span>{userInfo.name}</span>님의 운동 루틴
      </s.Label>
      {routineList?.length ? (
        <CardsScroller>
          {routineList.map((routineName, i) => (
            <Paper
              key={routineName}
              shadow={2}
              style={{ backgroundColor: theme.COLORS.LIGHT_BLUE }}
              hover
            >
              <s.RoutineButton onClick={() => onClickRoutineItem(routineName)}>
                <img src={routineSrcList[i]} alt="루틴 버튼" />
                <p>{routineName}</p>
              </s.RoutineButton>
            </Paper>
          ))}
        </CardsScroller>
      ) : (
        <s.RoutineListAltText>저장한 운동 루틴이 없습니다.</s.RoutineListAltText>
      )}
    </s.Wrapper>
  );
};

export default RoutineScroller;
