import React from "react";
import * as s from "./style";

interface ExerciseScoreContainerProp {
  exerciseName: string;
  exerciseScore: number;
}

const ExerciseScoreContainer = ({ exerciseName, exerciseScore }: ExerciseScoreContainerProp) => {
  return (
    <s.ExerciseInfo>
      <s.ExerciseName>{exerciseName}</s.ExerciseName>
      <s.ExerciseScore>{exerciseScore}</s.ExerciseScore>
      <p>kg/1RM</p>
    </s.ExerciseInfo>
  );
};

export default ExerciseScoreContainer;
