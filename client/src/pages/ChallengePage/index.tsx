import React, { useState, ChangeEvent } from "react";
import PageTemplate from "@pages/PageTemplate";
import Paper from "@components/design/Paper";
import { Powerlifting } from "@constants/enums";
import { NUMBER_REGEX } from "@constants/consts";
import squatSrc from "@public/images/img_squat.jpg";
import benchpressSrc from "@public/images/img_benchpress.jpg";
import deadliftSrc from "@public/images/img_deadlift.jpg";
import * as s from "./style";

interface SBDWeightState {
  squat: number;
  benchpress: number;
  deadlift: number;
}

interface ChallengeItemProps {
  name: Powerlifting;
  imageSrc: string;
  weight: number;
  setWeight: (weight: number) => void;
}

const ChallengeItem = ({ name, imageSrc, weight, setWeight }: ChallengeItemProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const stringValue = e.target.value.match(NUMBER_REGEX);
    const numberValue = stringValue ? +stringValue[0] : 0;
    setWeight(numberValue);
  };

  return (
    <Paper>
      <s.PowerliftingName>{name}</s.PowerliftingName>
      <s.PowerliftingImage src={imageSrc} alt={`${name}이미지`} />
      <s.TextFieldWrapper>
        <s.TextField placeholder="0" value={weight || ""} onChange={handleChange} />
        <span>kg/1RM</span>
      </s.TextFieldWrapper>
    </Paper>
  );
};

const ChallengePage = () => {
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
    if (SBDWeight.squat && SBDWeight.benchpress && SBDWeight.deadlift) {
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
        <s.SubmitButton disabled={!checkSBDWeightValidation()}>제출하기</s.SubmitButton>
      </s.Wrapper>
    </PageTemplate>
  );
};

export default ChallengePage;
