import React from "react";
import routineSrc1 from "@public/images/btn_routine_1.webp";
import routineSrc2 from "@public/images/btn_routine_2.webp";
import routineSrc3 from "@public/images/btn_routine_3.webp";
import routineSrc4 from "@public/images/btn_routine_4.webp";
import routineSrc5 from "@public/images/btn_routine_5.webp";
import routineSrc6 from "@public/images/btn_routine_6.webp";
import cancelSrc from "@public/icons/btn_cancel.svg";
import Paper from "@components/design/Paper";
import CardsScroller from "@components/design/CardsScroller";
import useUserInfo from "@hooks/query/user/useUserInfo";
import useRoutineList from "@hooks/query/routine/useRoutineList";
import ExerciseAPI from "@api/ExerciseAPI";
import theme from "@styles/Theme";
import { authStorage } from "src/services/ClientStorage";
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

  const handleClickRoutineDeleteButton = (routineName: string) => {
    // eslint-disable-next-line no-alert
    if (window.confirm("해당 루틴을 정말로 삭제하시겠습니까?")) {
      ExerciseAPI.deleteRoutine(routineName);
    }
  };

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
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "flex-end",
                backgroundColor: theme.COLORS.LIGHT_BLUE,
              }}
              hover
            >
              <s.RoutineDeleteButton
                visible={userId === authStorage.get()}
                onClick={() => handleClickRoutineDeleteButton(routineName)}
              >
                <img src={cancelSrc} alt="루틴 삭제 버튼" />
              </s.RoutineDeleteButton>
              <s.RoutineButton onClick={() => onClickRoutineItem(routineName)}>
                <img src={routineSrcList[i % 6]} alt="루틴 버튼" />
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
