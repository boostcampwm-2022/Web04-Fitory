import React, { ChangeEvent } from "react";
import useInputFocus from "@hooks/useInputFocus";
import { UserHeight, UserWeight } from "@constants/enums";
import { NUMBER_REGEX } from "@constants/consts";
import * as UserType from "src/types/user";
import * as s from "./style";

enum BodyInfo {
  HEIGHT = "height",
  WEIGHT = "weight",
}

interface BodyInfoInputSetProps {
  height: UserType.UserHeight;
  weight: UserType.UserWeight;
  setBodyInfo: ({
    height,
    weight,
  }: {
    height: UserType.UserHeight;
    weight: UserType.UserWeight;
  }) => void;
}

const BodyInfoInputSet = ({ height, weight, setBodyInfo }: BodyInfoInputSetProps) => {
  const heightTextFieldRef = useInputFocus();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const stringValue = e.target.value.match(NUMBER_REGEX);
    const numberValue = stringValue ? +stringValue[0] : 0;

    if (e.target.name === BodyInfo.HEIGHT) {
      if (numberValue <= UserHeight.MAX) {
        setBodyInfo({ height: numberValue, weight });
      }
      return;
    }
    if (numberValue <= UserWeight.MAX) {
      setBodyInfo({ height, weight: numberValue });
    }
  };

  return (
    <s.Wrapper>
      <s.Label>키 (cm)</s.Label>
      <s.TextField
        name={BodyInfo.HEIGHT}
        value={height || ""}
        placeholder="0"
        onChange={(e) => handleChange(e)}
        ref={heightTextFieldRef}
      />
      <s.Label>체중 (kg)</s.Label>
      <s.TextField
        name={BodyInfo.WEIGHT}
        value={weight || ""}
        placeholder="0"
        onChange={(e) => handleChange(e)}
      />
    </s.Wrapper>
  );
};

export default BodyInfoInputSet;
