import routineSrc1 from "@public/images/btn_routine_1.webp";
import routineSrc2 from "@public/images/btn_routine_2.webp";
import routineSrc3 from "@public/images/btn_routine_3.webp";
import routineSrc4 from "@public/images/btn_routine_4.webp";
import routineSrc5 from "@public/images/btn_routine_5.webp";
import routineSrc6 from "@public/images/btn_routine_6.webp";
import cancelSrc from "@public/icons/btn_cancel.svg";

import React, { useState } from "react";
import Paper from "@components/design/Paper";
import Modal from "@components/design/Modal";
import CardsScroller from "@components/design/CardsScroller";
import useUserInfo from "@hooks/query/user/useUserInfo";
import useRoutineList from "@hooks/query/routine/useRoutineList";
import useDeleteRoutine from "@hooks/query/routine/useDeleteRoutine";
import modalStore from "@stores/modalStore";
import { ModalKey } from "@constants/enums";
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
  const { deleteRoutine } = useDeleteRoutine();

  const [deleteRoutineName, setDeleteRoutineName] = useState("");
  const { openModal, closeModal } = modalStore();

  const handleOpenDeleteRoutineModal = (routineName: string) => {
    openModal(ModalKey.DELETE_ROUTINE);
    setDeleteRoutineName(routineName);
  };

  const handleClickDeleteRoutineButton = () => {
    deleteRoutine(deleteRoutineName);
    closeModal();
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
                onClick={() => handleOpenDeleteRoutineModal(routineName)}
              >
                <img src={cancelSrc} alt="루틴 삭제 버튼" />
              </s.RoutineDeleteButton>
              <s.RoutineButton onClick={() => onClickRoutineItem(routineName)}>
                <img src={routineSrcList[i % 6]} alt="루틴 버튼" />
                <p>{routineName}</p>
              </s.RoutineButton>
            </Paper>
          ))}
          <Modal modalKey={ModalKey.DELETE_ROUTINE}>
            <s.DeleteRoutineTitle>정말로 선택한 루틴을 삭제하시겠어요?</s.DeleteRoutineTitle>
            <s.ConfirmButton onClick={handleClickDeleteRoutineButton}>삭제</s.ConfirmButton>
          </Modal>
        </CardsScroller>
      ) : (
        <s.RoutineListAltText>저장한 운동 루틴이 없습니다.</s.RoutineListAltText>
      )}
    </s.Wrapper>
  );
};

export default RoutineScroller;
