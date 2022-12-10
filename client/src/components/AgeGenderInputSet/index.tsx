import React, { ChangeEvent } from "react";
import useInputFocus from "@hooks/useInputFocus";
import { Gender, UserAge } from "@constants/enums";
import { NUMBER_REGEX } from "@constants/consts";
import maleSymbolSrc from "@public/images/img_male_symbol.webp";
import femaleSymbolSrc from "@public/images/img_female_symbol.webp";
import * as UserType from "src/types/user";
import * as s from "./style";

interface AgeGenderInputSetProps {
  age: UserType.UserAge;
  gender: UserType.UserGender;
  setAgeGender: ({ age, gender }: { age: UserType.UserAge; gender: UserType.UserGender }) => void;
}

const AgeGenderInputSet = ({ age, gender, setAgeGender }: AgeGenderInputSetProps) => {
  const ageTextFieldRef = useInputFocus();

  const handleChangeAge = (e: ChangeEvent<HTMLInputElement>) => {
    const matchedArray = e.target.value.match(NUMBER_REGEX);
    const numberValue = matchedArray ? +matchedArray[0] : 0;
    if (numberValue > UserAge.MAX) {
      return;
    }
    setAgeGender({ age: numberValue, gender });
  };

  return (
    <s.Wrapper>
      <s.Label>나이</s.Label>
      <s.AgeTextField
        placeholder="0"
        value={age || ""}
        ref={ageTextFieldRef}
        onChange={handleChangeAge}
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
