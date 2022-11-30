import React from "react";
import PageTemplate from "@pages/PageTemplate";
import ExerciseScoreContainer from "@components/ExerciseScoreContainer";
import StaticsUserInfoContainer from "@components/StaticsUserInfoContainer";
import Carousel from "@components/Carousel";
import * as s from "./style";

const StaticsPage = () => {
  return (
    <PageTemplate isRoot>
      <s.UserInfoContainer>
        <s.ScoreContainer>
          <ExerciseScoreContainer exerciseName="스쿼트" exerciseScore={140} />
          <ExerciseScoreContainer exerciseName="벤치프레스" exerciseScore={140} />
          <ExerciseScoreContainer exerciseName="데드리프트" exerciseScore={140} />
        </s.ScoreContainer>
        <StaticsUserInfoContainer />
      </s.UserInfoContainer>
      <div>
        <Carousel />
      </div>
    </PageTemplate>
  );
};

export default StaticsPage;
