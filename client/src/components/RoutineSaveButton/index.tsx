import React, { useState } from "react";
import Modal from "@components/design/Modal";
import modalStore from "@stores/modalStore";
import exerciseStore from "@stores/exerciseStore";
import useSaveRoutine from "@hooks/query/useSaveRoutine";
import * as s from "./style";

const RoutineSaveButton = () => {
  const { saveRoutine } = useSaveRoutine();
  const { openModal } = modalStore();
  const { exerciseList } = exerciseStore();
  const [routineName, setRoutineName] = useState("");

  const handleClickRoutineSaveButton = () => {
    saveRoutine({ routineName, exerciseList });
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
