import React from "react";
import PageTemplate from "@pages/PageTemplate";
import ExerciseScoreContainer from "@components/ExerciseScoreContainer";
import StatisticsUserInfoContainer from "@components/StatisticsUserInfoContainer";
import StatisticsCarousel from "@components/StatisticsCarousel";
import * as s from "./style";

const StatisticsPage = () => {
  return (
    <PageTemplate isRoot>
      <s.Wrapper>
        <s.UserInfoContainer>
          <s.ScoreContainer>
            <ExerciseScoreContainer exerciseName="스쿼트" exerciseScore={140} />
            <ExerciseScoreContainer exerciseName="벤치프레스" exerciseScore={140} />
            <ExerciseScoreContainer exerciseName="데드리프트" exerciseScore={140} />
          </s.ScoreContainer>
          <StatisticsUserInfoContainer />
        </s.UserInfoContainer>
        <StatisticsCarousel />
      </s.Wrapper>
    </PageTemplate>
  );
};

export default StatisticsPage;
