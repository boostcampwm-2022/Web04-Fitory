import React, { useState, FormEvent, ChangeEvent, useEffect } from "react";
import ProfileImageContainer from "@components/ProfileImageContainer";
import PageTemplate from "@pages/PageTemplate";
import useUserInfo from "@hooks/query/user/useUserInfo";
import toggleBtn from "@public/images/btn_toggle.svg";
import { Gender, UserName, UserIntroduce, UserAge, UserHeight, UserWeight } from "@constants/enums";
import { NICKNAME_REGEX, NUMBER_REGEX } from "@constants/consts";
import useUserUpdate from "@hooks/query/user/useUserUpdate";
import { authStorage } from "src/services/ClientStorage";
import { UpdateUserInfo } from "src/types/user";
import * as s from "./style";

const ProfileEditPage = () => {
  const { updateUser } = useUserUpdate();
  const { userInfo } = useUserInfo(authStorage.get());
  const [visibleState, setVisibleState] = useState(false);
  const [profileImage, setProfileImage] = useState<Blob>();
  const [inputValues, setInputValues] = useState<UpdateUserInfo>({
    name: userInfo.name,
    introduce: userInfo.introduce,
    age: userInfo.age,
    gender: userInfo.gender,
    height: userInfo.height,
    weight: userInfo.weight,
    profileImage: null,
  });

  const openPrivateInfoEdit = () => {
    setVisibleState((prevState) => !prevState);
  };

  const submitInformation = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateUser(inputValues);
  };

  const checkIsActiveSubmitButton = () => {
    const { name, introduce, age, gender, height, weight } = userInfo;
    const originValues = [name, introduce, age, gender, height, weight];
    const newValues = Object.values(inputValues);
    return originValues.findIndex((_, i) => originValues[i] !== newValues[i]) > -1 || profileImage;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const matchedArray = e.target.value.match(NUMBER_REGEX);
    const numberValue = matchedArray ? +matchedArray[0] : 0;

    switch (e.target.name) {
      case "userName":
        if (e.target.value.match(NICKNAME_REGEX) && e.target.value.length <= UserName.MAX) {
          setInputValues({ ...inputValues, name: e.target.value });
        }
        break;
      case "introduce":
        if (e.target.value.length <= UserIntroduce.MAX) {
          setInputValues({ ...inputValues, introduce: e.target.value });
        }
        break;
      case "age":
        if (numberValue <= UserAge.MAX) {
          setInputValues({ ...inputValues, age: numberValue });
        }
        break;
      case "height":
        if (numberValue <= UserHeight.MAX) {
          setInputValues({ ...inputValues, height: numberValue });
        }
        break;
      case "weight":
        if (numberValue <= UserWeight.MAX) {
          setInputValues({ ...inputValues, weight: numberValue });
        }
        break;
      default:
    }
  };

  useEffect(() => {
    if (profileImage && profileImage !== inputValues.profileImage) {
      setInputValues({ ...inputValues, profileImage });
    }
  }, [inputValues, profileImage]);

  return (
    <PageTemplate isRoot={false} title="프로필 편집">
      <s.ProfileEditForm onSubmit={submitInformation}>
        <s.EditProfileImgButton>
          <ProfileImageContainer
            isModified={false}
            profileImgUrl={userInfo.profileImage}
            setProfileImg={setProfileImage}
          />
        </s.EditProfileImgButton>
        <s.ProfileEditInputContainer>
          <s.ProfileEditLabel>이름</s.ProfileEditLabel>
          <s.ProfileEditInput
            type="text"
            name="userName"
            placeholder="이름을 입력해주세요."
            value={inputValues.name}
            onChange={handleChange}
          />
        </s.ProfileEditInputContainer>
        <s.ProfileEditInputContainer>
          <s.ProfileEditLabel>자기소개</s.ProfileEditLabel>
          <s.ProfileEditInput
            type="text"
            name="introduce"
            placeholder="자기소개를 입력해주세요."
            value={inputValues.introduce}
            onChange={handleChange}
          />
        </s.ProfileEditInputContainer>
        <s.PrivateInfoWrapper>
          <s.PrivateInfoToggleHeader>
            <s.ToggleButton type="button" visibleState={visibleState} onClick={openPrivateInfoEdit}>
              <img src={toggleBtn} alt="운동 세부사항 보기 버튼" />
            </s.ToggleButton>
            <s.PrivateInfoToggle> 개인 정보 수정 </s.PrivateInfoToggle>
          </s.PrivateInfoToggleHeader>
          <s.PrivateInfoContainer visibleState={visibleState}>
            <s.ProfileEditInputContainer>
              <s.ProfileEditLabel>나이</s.ProfileEditLabel>
              <s.ProfileEditInput
                type="text"
                name="age"
                placeholder="만 나이를 입력해주세요."
                value={inputValues.age}
                onChange={handleChange}
              />
            </s.ProfileEditInputContainer>
            <s.ProfileEditInputContainer>
              <s.ProfileEditLabel>성별</s.ProfileEditLabel>
              <s.profileGenderButtonWrapper>
                <s.profileGenderButton
                  type="button"
                  isSelected={inputValues.gender === Gender.MALE}
                  onClick={() => setInputValues({ ...inputValues, gender: Gender.MALE })}
                >
                  남
                </s.profileGenderButton>
                <s.profileGenderButton
                  type="button"
                  isSelected={inputValues.gender === Gender.FEMALE}
                  onClick={() => setInputValues({ ...inputValues, gender: Gender.FEMALE })}
                >
                  여
                </s.profileGenderButton>
              </s.profileGenderButtonWrapper>
            </s.ProfileEditInputContainer>
            <s.ProfileEditInputContainer>
              <s.ProfileEditLabel>신장</s.ProfileEditLabel>
              <s.ProfileEditInput
                type="text"
                name="height"
                placeholder="신장을 입력해주세요."
                value={inputValues.height}
                onChange={handleChange}
              />
            </s.ProfileEditInputContainer>
            <s.ProfileEditInputContainer>
              <s.ProfileEditLabel>체중</s.ProfileEditLabel>
              <s.ProfileEditInput
                type="text"
                name="weight"
                placeholder="체중을 입력해주세요."
                value={inputValues.weight}
                onChange={handleChange}
              />
            </s.ProfileEditInputContainer>
          </s.PrivateInfoContainer>
        </s.PrivateInfoWrapper>
        <s.SubmitButton type="submit" disabled={!checkIsActiveSubmitButton()}>
          수정 완료
        </s.SubmitButton>
      </s.ProfileEditForm>
    </PageTemplate>
  );
};

export default ProfileEditPage;
