import React, { useState, ChangeEvent } from "react";
import useInputFocus from "@hooks/useInputFocus";
import { Gender } from "@constants/enums";
import maleSymbolSrc from "@public/images/maleSymbol.png";
import femaleSymbolSrc from "@public/images/femaleSymbol.png";
import * as s from "./style";

const AgeGenderInputSet = () => {
  const ageTextFieldRef = useInputFocus();
  const [age, setAge] = useState("");
  const [gender, setGender] = useState(Gender.MALE);

  const handleChangeAge = (e: ChangeEvent<HTMLInputElement>) => {
    const stringValue = e.target.value.match(/\d+/);
    const numberValue = stringValue ? +stringValue[0] : 0;

    if (numberValue > 120) {
      return;
    }

    setAge(numberValue ? numberValue.toString() : "");
  };

  return (
    <s.Wrapper>
      <s.Label>나이</s.Label>
      <s.AgeTextField
        type="number"
        placeholder="0"
        value={age}
        ref={ageTextFieldRef}
        onChange={(e) => handleChangeAge(e)}
      />
      <s.Label>성별</s.Label>
      <s.GenderWrapper>
        <s.GenderSelectButton
          name={Gender.MALE}
          isActive={Gender.MALE === gender}
          onClick={() => setGender(Gender.MALE)}
        >
          <img src={maleSymbolSrc} alt="남성 버튼" />
        </s.GenderSelectButton>
        <s.GenderSelectButton
          name={Gender.FEMALE}
          isActive={Gender.FEMALE === gender}
          onClick={() => setGender(Gender.FEMALE)}
        >
          <img src={femaleSymbolSrc} alt="여성 버튼" />
        </s.GenderSelectButton>
      </s.GenderWrapper>
    </s.Wrapper>
  );
};

export default AgeGenderInputSet;
