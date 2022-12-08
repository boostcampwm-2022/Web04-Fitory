import React, { useState } from "react";
import PageTemplate from "@pages/PageTemplate";
import ChallengeItem from "@components/ChallengeItem";
import { Powerlifting } from "@constants/enums";
import squatSrc from "@public/images/img_squat.webp";
import benchpressSrc from "@public/images/img_benchpress.webp";
import deadliftSrc from "@public/images/img_deadlift.webp";
import useDecreaseTime from "@hooks/useDecreaseTime";
import useSubmitChallenge from "@hooks/query/useSubmitChallenge";
import useRecentChallengeTime from "@hooks/query/useRecentChallengeTime";
import addZeroPaddingToNumber from "@utils/addZeroPaddingToNumber";
import * as s from "./style";

interface SBDWeightState {
  squat: number;
  benchpress: number;
  deadlift: number;
}

const ChallengePage = () => {
  const { submitChallenge } = useSubmitChallenge();
  const { nowTimeStamp, targetTimeStamp } = useRecentChallengeTime();
  const remaingingTime = useDecreaseTime(targetTimeStamp, nowTimeStamp);

  const [SBDWeight, setSBDWeight] = useState<SBDWeightState>({
    squat: 0,
    benchpress: 0,
    deadlift: 0,
  });

  const PowerliftingInfo = [
    {
      name: Powerlifting.SQUAT,
      imageSrc: squatSrc,
      weight: SBDWeight.squat,
      setWeight: (squat: number) => setSBDWeight({ ...SBDWeight, squat }),
    },
    {
      name: Powerlifting.BENCH_PRESS,
      imageSrc: benchpressSrc,
      weight: SBDWeight.benchpress,
      setWeight: (benchpress: number) => setSBDWeight({ ...SBDWeight, benchpress }),
    },
    {
      name: Powerlifting.DEADLIFT,
      imageSrc: deadliftSrc,
      weight: SBDWeight.deadlift,
      setWeight: (deadlift: number) => setSBDWeight({ ...SBDWeight, deadlift }),
    },
  ];

  const checkSBDWeightValidation = () => {
    if (!remaingingTime && SBDWeight.squat && SBDWeight.benchpress && SBDWeight.deadlift) {
      return true;
    }
    return false;
  };

  const handleClickSubmitButton = () => {
    if (remaingingTime) {
      // eslint-disable-next-line no-alert
      alert("최근 챌린지 후 24시간 내 이용할 수 없습니다.");
      return;
    }
    if (!checkSBDWeightValidation()) {
      // eslint-disable-next-line no-alert
      alert("올바르지 않은 입력입니다.");
      return;
    }
    submitChallenge(SBDWeight);
  };

  return (
    <PageTemplate title="3대 챌린지" isRoot={false}>
      <s.Wrapper>
        {PowerliftingInfo.map(({ name, imageSrc, weight, setWeight }) => (
          <ChallengeItem
            key={name}
            name={name}
            imageSrc={imageSrc}
            weight={weight}
            setWeight={setWeight}
          />
        ))}
        <s.SubmitButton disabled={!checkSBDWeightValidation()} onClick={handleClickSubmitButton}>
          {remaingingTime ? (
            <>
              <span>{addZeroPaddingToNumber(remaingingTime.hours)} : </span>
              <span>{addZeroPaddingToNumber(remaingingTime.minutes)} : </span>
              <span>{addZeroPaddingToNumber(remaingingTime.seconds)}</span>
            </>
          ) : (
            "제출하기"
          )}
        </s.SubmitButton>
      </s.Wrapper>
    </PageTemplate>
  );
};

export default ChallengePage;
