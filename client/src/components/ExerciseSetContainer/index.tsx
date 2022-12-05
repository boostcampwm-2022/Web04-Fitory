import React from "react";
import styled from "styled-components";

const ExerciseSetContainer = ({ exercise }) => {
  const drawExerciseSet = (dayExerciseHistory) => {
    return dayExerciseHistory.map((set, index) => {
      return (
        <SetRow key={index}>
          <AttributeLabel>{set.index}</AttributeLabel>
          <AttributeLabel>{set.kg}</AttributeLabel>
          <AttributeLabel>{set.count}</AttributeLabel>
          <AttributeLabel>{set.check}</AttributeLabel>
        </SetRow>
      );
    });
  };
  return (
    <Wrapper>
      <SetNameLabel>{exercise.name}</SetNameLabel>
      <HeaderRow>
        <AttributeLabel>세트</AttributeLabel>
        <AttributeLabel>무게</AttributeLabel>
        <AttributeLabel>회수</AttributeLabel>
        <AttributeLabel>완료</AttributeLabel>
      </HeaderRow>
      <div>{drawExerciseSet(exercise.set)}</div>
    </Wrapper>
  );
};

const HeaderRow = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.COLORS.DEEP_BLUE};
`;

const SetRow = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DEEP_BLUE};
`;

export default ExerciseSetContainer;

const Wrapper = styled.div`
  margin-top: 50px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  padding: 20px;
  border-radius: 20px;

  text-align: center;
  color: ${({ theme }) => theme.COLORS.DEEP_BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;

const SetNameLabel = styled.div`
  text-align: left;
  width: 100%;
`;

const AttributeLabel = styled.div`
  text-align: center;
  width: 25%;
`;
