import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "@constants/enums";
import PageTemplate from "@pages/PageTemplate";
import NicknameTextField from "@components/NicknameTextField";
import AgeGenderInputSet from "@components/AgeGenderInputSet";
import BodyInfoInputSet from "@components/BodyInfoInputSet";
import * as s from "./style";

const joinProcess = [
  { title: "닉네임을 입력하세요.", component: <NicknameTextField /> },
  { title: "나이, 성별을 입력하세요.", component: <AgeGenderInputSet /> },
  { title: "키, 체중을 입력하세요.", component: <BodyInfoInputSet /> },
];

const JoinPage = () => {
  const navigete = useNavigate();
  const [step, setStep] = useState(0);

  const handleClickBackButton = () => {
    setStep(step - 1);
  };

  const handleClickNextButton = () => {
    if (step === 2) {
      navigete(RoutePath.PROFILE, { replace: true });
    }
    setStep(step + 1);
  };

  return (
    <PageTemplate
      isRoot={false}
      onClickBackButton={step ? handleClickBackButton : undefined}
      disableBottomNavBar
    >
      <s.Wrapper>
        <s.Title>{joinProcess[step].title}</s.Title>
        <s.ContentWrapper>
          <s.TextFieldWrapper>{joinProcess[step].component}</s.TextFieldWrapper>
          <s.NextButton onClick={handleClickNextButton}>
            {joinProcess.length - 1 === step ? "완료" : "다음"}
          </s.NextButton>
        </s.ContentWrapper>
      </s.Wrapper>
    </PageTemplate>
  );
};

export default JoinPage;
