import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath, Gender, UserName, UserAge, UserHeight, UserWeight } from "@constants/enums";
import PageTemplate from "@pages/PageTemplate";
import NicknameTextField from "@components/NicknameTextField";
import AgeGenderInputSet from "@components/AgeGenderInputSet";
import BodyInfoInputSet from "@components/BodyInfoInputSet";
import { JoinUserInfo } from "src/types/user";
import * as s from "./style";

const JoinPage = () => {
  const navigete = useNavigate();
  const [step, setStep] = useState(0);
  const [userInfo, setUserInfo] = useState<JoinUserInfo>({
    name: "",
    age: 0,
    gender: Gender.MALE,
    height: 0,
    weight: 0,
  });

  const handleClickBackButton = () => {
    setStep(step - 1);
  };

  const handleClickNextButton = () => {
    if (step === 2) {
      navigete(RoutePath.PROFILE, { replace: true });
    }
    setStep(step + 1);
  };

  const checkNicknameValidation = () => {
    const { name } = userInfo;
    return name.length >= UserName.MIN && name.length <= UserName.MAX;
  };

  const checkAgeGenderValidation = () => {
    const { age, gender } = userInfo;
    return (
      age >= UserAge.MIN &&
      age <= UserAge.MAX &&
      (gender === Gender.MALE || gender === Gender.FEMALE)
    );
  };

  const checkBodyInfoValidation = () => {
    const { height, weight } = userInfo;
    return (
      height >= UserHeight.MIN &&
      height <= UserHeight.MAX &&
      weight >= UserWeight.MIN &&
      weight <= UserWeight.MAX
    );
  };

  const setNickname = (name: string) => {
    setUserInfo({ ...userInfo, name });
  };

  const setAgeGender = ({ age, gender }: { age: number; gender: Gender }) => {
    setUserInfo({ ...userInfo, age, gender });
  };

  const setBodyInfo = ({ height, weight }: { height: number; weight: number }) => {
    setUserInfo({ ...userInfo, height, weight });
  };

  const joinProcess = [
    {
      title: "닉네임을 입력하세요.",
      checkValidation: checkNicknameValidation,
      component: <NicknameTextField nickname={userInfo.name} setNickname={setNickname} />,
    },
    {
      title: "나이, 성별을 입력하세요.",
      checkValidation: checkAgeGenderValidation,
      component: (
        <AgeGenderInputSet
          age={userInfo.age}
          gender={userInfo.gender}
          setAgeGender={setAgeGender}
        />
      ),
    },
    {
      title: "키, 체중을 입력하세요.",
      checkValidation: checkBodyInfoValidation,
      component: (
        <BodyInfoInputSet
          height={userInfo.height}
          weight={userInfo.weight}
          setBodyInfo={setBodyInfo}
        />
      ),
    },
  ];

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
          <s.NextButton
            onClick={handleClickNextButton}
            disabled={!joinProcess[step].checkValidation()}
          >
            {joinProcess.length - 1 === step ? "완료" : "다음"}
          </s.NextButton>
        </s.ContentWrapper>
      </s.Wrapper>
    </PageTemplate>
  );
};

export default JoinPage;
