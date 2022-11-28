import React, { ChangeEvent } from "react";
import Paper from "@components/design/Paper";
import { Powerlifting } from "@constants/enums";
import { NUMBER_REGEX } from "@constants/consts";
import * as s from "./style";

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

export default ChallengeItem;
