import React from "react";
import PageTemplate from "@pages/PageTemplate";
import Paper from "@components/design/Paper";
import { Powerlifting } from "@constants/enums";
import squatSrc from "@public/images/img_squat.jpg";
import benchpressSrc from "@public/images/img_benchpress.jpg";
import deadliftSrc from "@public/images/img_deadlift.jpg";
import * as s from "./style";

interface ChallengeItemProps {
  powerliftingName: Powerlifting;
  powerliftingImageSrc: string;
}

const PowerliftingInfo = [
  { name: Powerlifting.SQUAT, imageSrc: squatSrc },
  { name: Powerlifting.BENCH_PRESS, imageSrc: benchpressSrc },
  { name: Powerlifting.DEADLIFT, imageSrc: deadliftSrc },
];

const ChallengeItem = ({ powerliftingName, powerliftingImageSrc }: ChallengeItemProps) => {
  return (
    <Paper>
      <s.PowerliftingName>{powerliftingName}</s.PowerliftingName>
      <s.PowerliftingImage src={powerliftingImageSrc} alt={`${powerliftingName}이미지`} />
      <s.TextFieldWrapper>
        <s.TextField placeholder="0" />
        <span>kg/1RM</span>
      </s.TextFieldWrapper>
    </Paper>
  );
};

const ChallengePage = () => {
  return (
    <PageTemplate title="3대 챌린지" isRoot={false}>
      <s.Wrapper>
        {PowerliftingInfo.map(({ name, imageSrc }) => (
          <ChallengeItem powerliftingName={name} powerliftingImageSrc={imageSrc} />
        ))}
        <s.SubmitButton>제출하기</s.SubmitButton>
      </s.Wrapper>
    </PageTemplate>
  );
};

export default ChallengePage;
