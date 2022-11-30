import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { RoutePath, Gender } from "@constants/enums";
import PageTemplate from "@pages/PageTemplate";
import NicknameTextField from "@components/NicknameTextField";
import AgeGenderInputSet from "@components/AgeGenderInputSet";
import BodyInfoInputSet from "@components/BodyInfoInputSet";
import UserValidation from "@utils/UserValidation";
import useJoinUser from "@hooks/query/useJoinUser";
import * as UserType from "src/types/user";
import * as s from "./style";

const JoinPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { joinUser } = useJoinUser();

  const [step, setStep] = useState(0);
  const [userInfo, setUserInfo] = useState<UserType.JoinUserInfo>({
    access_token: "",
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
      joinUser(userInfo);
      return;
    }
    setStep(step + 1);
  };

  const setNickname = (name: UserType.UserName) => {
    setUserInfo({ ...userInfo, name });
  };

  const setAgeGender = ({
    age,
    gender,
  }: {
    age: UserType.UserAge;
    gender: UserType.UserGender;
  }) => {
    setUserInfo({ ...userInfo, age, gender });
  };

  const setBodyInfo = ({
    height,
    weight,
  }: {
    height: UserType.UserHeight;
    weight: UserType.UserWeight;
  }) => {
    setUserInfo({ ...userInfo, height, weight });
  };

  const joinProcess = [
    {
      title: "닉네임을 입력하세요.",
      checkValidation: () => UserValidation.checkNicknameValidation(userInfo.name),
      component: <NicknameTextField nickname={userInfo.name} setNickname={setNickname} />,
    },
    {
      title: "나이, 성별을 입력하세요.",
      checkValidation: () => UserValidation.checkAgeGenderValidation({ ...userInfo }),
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
      checkValidation: () => UserValidation.checkBodyInfoValidation({ ...userInfo }),
      component: (
        <BodyInfoInputSet
          height={userInfo.height}
          weight={userInfo.weight}
          setBodyInfo={setBodyInfo}
        />
      ),
    },
  ];

  useEffect(() => {
    if (!location.state || !location.state.accessToken) {
      navigate(RoutePath.HOME, { replace: true });
      return;
    }
    if (!userInfo.access_token) {
      setUserInfo({
        ...userInfo,
        access_token: location.state.accessToken,
      });
    }
  }, [location, navigate, userInfo]);

  return (
    <PageTemplate isRoot={false} onClickBackButton={step ? handleClickBackButton : undefined}>
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
