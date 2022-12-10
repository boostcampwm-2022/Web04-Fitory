import React, { useState } from "react";
import { toast } from "react-toastify";
import { error } from "@constants/message";
import { ModalKey } from "@constants/enums";
import Modal from "@components/design/Modal";
import modalStore from "@stores/modalStore";
import exerciseStore from "@stores/exerciseStore";
import useSaveRoutine from "@hooks/query/routine/useSaveRoutine";
import useRoutineList from "@hooks/query/routine/useRoutineList";
import { authStorage } from "src/services/ClientStorage";
import * as s from "./style";

const RoutineSaveButton = ({ otherRoutineName }: { otherRoutineName?: string }) => {
  const { saveRoutine, isSussess } = useSaveRoutine();
  const { routineList } = useRoutineList(authStorage.get());

  const { openModal, closeModal } = modalStore();
  const { exerciseList } = exerciseStore();
  const [routineName, setRoutineName] = useState(otherRoutineName || "");

  const handleClickRoutineSaveButton = () => {
    if (routineList.includes(routineName)) {
      toast.error(error.SAVE_ROUTINE_DUPLICATE);
      return;
    }
    if (!routineName && exerciseList.find(({ exerciseName }) => !exerciseName)) {
      toast.error(error.SAVE_ROUTINE_EMPTY);
      return;
    }
    saveRoutine({ routineName, exerciseList });
    if (isSussess) {
      closeModal();
    }
  };

  return (
    <>
      <s.RoutineSaveButton
        isOtherRoutine={Boolean(otherRoutineName)}
        onClick={() => openModal(ModalKey.SAVE_ROUTINE)}
      >
        {otherRoutineName ? "내 루틴으로 저장" : "루틴 저장"}
      </s.RoutineSaveButton>
      <Modal modalKey={ModalKey.SAVE_ROUTINE}>
        <s.RoutineNameLabel>루틴 이름을 입력해주세요.</s.RoutineNameLabel>
        <s.RoutineNameTextField
          value={routineName}
          onChange={(e) => setRoutineName(e.target.value)}
        />
        <s.RoutineNameSaveButton onClick={handleClickRoutineSaveButton}>
          저장
        </s.RoutineNameSaveButton>
      </Modal>
    </>
  );
};

export default RoutineSaveButton;
