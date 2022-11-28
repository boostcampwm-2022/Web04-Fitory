import React, { useState } from "react";
import PageTemplate from "@pages/PageTemplate";
import ChallengeItem from "@components/ChallengeItem";
import { Powerlifting } from "@constants/enums";
import squatSrc from "@public/images/img_squat.jpg";
import benchpressSrc from "@public/images/img_benchpress.jpg";
import deadliftSrc from "@public/images/img_deadlift.jpg";
import useTimeCount from "@hooks/useTimeCount";
import addZeroPaddingToNumber from "@utils/addZeroPaddingToNumber";
import * as s from "./style";

interface SBDWeightState {
  squat: number;
  benchpress: number;
  deadlift: number;
}

// 현재 시간에 10초를 더한 시간을 버튼 활성화 시간으로 테스트
const targetTime = new Date();
targetTime.setSeconds(targetTime.getSeconds() + 10);

const ChallengePage = () => {
  const remaingingTime = useTimeCount(targetTime);
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
        <s.SubmitButton disabled={!checkSBDWeightValidation()}>
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