import React from "react";
import PageTemplate from "@pages/PageTemplate";
import ExerciseScoreContainer from "@components/ExerciseScoreContainer";
import StatisticsUserInfoContainer from "@components/StatisticsUserInfoContainer";
import StatisticsCarousel from "@components/StatisticsCarousel";
import NotificationButton from "@components/NotificationButton";
import useBestChallengeScore from "@hooks/query/challenge/useBestChallengeScore";
import { Powerlifting } from "@constants/enums";
import * as s from "./style";

const ExerciseScoreInfo = () => {
  const { bestChallengeScore } = useBestChallengeScore();
  return (
    <s.ScoreContainer>
      <ExerciseScoreContainer
        exerciseName={Powerlifting.SQUAT}
        exerciseScore={bestChallengeScore?.squat || "-"}
      />
      <ExerciseScoreContainer
        exerciseName={Powerlifting.BENCH_PRESS}
        exerciseScore={bestChallengeScore?.benchpress || "-"}
      />
      <ExerciseScoreContainer
        exerciseName={Powerlifting.DEADLIFT}
        exerciseScore={bestChallengeScore?.deadlift || "-"}
      />
    </s.ScoreContainer>
  );
};

const StatisticsPage = () => {
  return (
    <PageTemplate isRoot topNavRightItem={<NotificationButton />}>
      <s.Wrapper>
        <s.UserInfoContainer>
          <ExerciseScoreInfo />
          <StatisticsUserInfoContainer />
        </s.UserInfoContainer>
        <StatisticsCarousel />
      </s.Wrapper>
    </PageTemplate>
  );
};

export default StatisticsPage;
