import React, { ChangeEvent } from "react";
import useInputFocus from "@hooks/useInputFocus";
import { UserHeight, UserWeight } from "@constants/enums";
import * as s from "./style";

enum BodyInfo {
  HEIGHT = "height",
  WEIGHT = "weight",
}

interface BodyInfoInputSetProps {
  height: number;
  weight: number;
  setBodyInfo: ({ height, weight }: { height: number; weight: number }) => void;
}

const BodyInfoInputSet = ({ height, weight, setBodyInfo }: BodyInfoInputSetProps) => {
  const heightTextFieldRef = useInputFocus();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const stringValue = e.target.value.match(/\d+/);
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
