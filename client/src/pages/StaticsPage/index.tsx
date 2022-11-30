import React from "react";
import PageTemplate from "@pages/PageTemplate";
import styled from "styled-components";
import ExerciseScoreContainer from "@components/ExerciseScoreContainer";
import StaticsUserInfoContainer from "@components/StaticsUserInfoContainer";
import Carousel from "@components/Carousel";

const StaticsPage = () => {
  return (
    <PageTemplate isRoot>
      <UserInfoContainer>
        <ScoreContainer>
          <ExerciseScoreContainer exerciseName="스쿼트" exerciseScore={140} />
          <ExerciseScoreContainer exerciseName="벤치프레스" exerciseScore={140} />
          <ExerciseScoreContainer exerciseName="데드리프트" exerciseScore={140} />
        </ScoreContainer>
        <StaticsUserInfoContainer />
      </UserInfoContainer>
      <div>
        <Carousel />
      </div>
    </PageTemplate>
  );
};

export const UserInfoContainer = styled.div`
  position: relative;
  text-align: center;
  height: 230px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
`;

export const ScoreContainer = styled.div`
  color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  width: 100%;
  height: 200px;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
`;

export default StaticsPage;
