import React, { ChangeEvent } from "react";
import useInputFocus from "@hooks/useInputFocus";
import { Gender, UserAge } from "@constants/enums";
import maleSymbolSrc from "@public/images/maleSymbol.png";
import femaleSymbolSrc from "@public/images/femaleSymbol.png";
import * as s from "./style";

interface AgeGenderInputSetProps {
  age: number;
  gender: Gender;
  setAgeGender: ({ age, gender }: { age: number; gender: Gender }) => void;
}

const AgeGenderInputSet = ({ age, gender, setAgeGender }: AgeGenderInputSetProps) => {
  const ageTextFieldRef = useInputFocus();

  const handleChangeAge = (e: ChangeEvent<HTMLInputElement>) => {
    const stringValue = e.target.value.match(/\d+/);
    const numberValue = stringValue ? +stringValue[0] : 0;
    if (numberValue > UserAge.MAX) {
      return;
    }
    setAgeGender({ age: numberValue, gender });
  };

  return (
    <s.Wrapper>
      <s.Label>나이</s.Label>
      <s.AgeTextField
        type="number"
        placeholder="0"
        value={age || ""}
        ref={ageTextFieldRef}
        onChange={(e) => handleChangeAge(e)}
      />
      <s.Label>성별</s.Label>
      <s.GenderWrapper>
        <s.GenderSelectButton
          isActive={Gender.MALE === gender}
          onClick={() => setAgeGender({ age, gender: Gender.MALE })}
        >
          <img src={maleSymbolSrc} alt="남성 버튼" />
        </s.GenderSelectButton>
        <s.GenderSelectButton
          isActive={Gender.FEMALE === gender}
          onClick={() => setAgeGender({ age, gender: Gender.FEMALE })}
        >
          <img src={femaleSymbolSrc} alt="여성 버튼" />
        </s.GenderSelectButton>
      </s.GenderWrapper>
    </s.Wrapper>
  );
};

export default AgeGenderInputSet;
