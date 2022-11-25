import React, { useState, ChangeEvent } from "react";
import useInputFocus from "@hooks/useInputFocus";
import * as s from "./style";

enum BodyInfo {
  HEIGHT = "height",
  WIDTH = "width",
}

const BodyInfoInputSet = () => {
  const heightTextFieldRef = useInputFocus();
  const [bodyInfo, setBodyInfo] = useState({ height: "", weight: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const stringValue = e.target.value.match(/\d+/);
    const numberValue = stringValue ? +stringValue[0] : 0;

    if (numberValue.toString().length > 3) {
      return;
    }

    if (e.target.name === BodyInfo.HEIGHT) {
      setBodyInfo({ ...bodyInfo, height: `${numberValue}` });
      return;
    }

    setBodyInfo({ ...bodyInfo, weight: `${numberValue}` });
  };

  return (
    <s.Wrapper>
      <s.Label>키 (cm)</s.Label>
      <s.TextField
        name={BodyInfo.HEIGHT}
        value={bodyInfo.height}
        placeholder="0"
        onChange={(e) => handleChange(e)}
        ref={heightTextFieldRef}
      />
      <s.Label>체중 (kg)</s.Label>
      <s.TextField
        name={BodyInfo.WIDTH}
        value={bodyInfo.weight}
        placeholder="0"
        onChange={(e) => handleChange(e)}
      />
    </s.Wrapper>
  );
};

export default BodyInfoInputSet;
