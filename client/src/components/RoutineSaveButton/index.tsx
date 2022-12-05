import React, { useState } from "react";
import Modal from "@components/design/Modal";
import modalStore from "@stores/modalStore";
import exerciseStore from "@stores/exerciseStore";
import useSaveRoutine from "@hooks/query/useSaveRoutine";
import useRoutineList from "@hooks/query/useRoutineList";
import { authStorage } from "src/services/ClientStorage";
import * as s from "./style";

const RoutineSaveButton = () => {
  const { saveRoutine } = useSaveRoutine();
  const { routineList } = useRoutineList(authStorage.get());

  const { openModal, closeModal } = modalStore();
  const { exerciseList } = exerciseStore();
  const [routineName, setRoutineName] = useState("");

  const handleClickRoutineSaveButton = () => {
    if (routineList?.includes(routineName)) {
      // eslint-disable-next-line no-alert
      alert("이미 존재하는 루틴 이름입니다.");
      return;
    }
    saveRoutine({ routineName, exerciseList });
    closeModal();
  };

  return (
    <>
      <s.RoutineSaveButton onClick={() => openModal()}>루틴 저장</s.RoutineSaveButton>
      <Modal>
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
