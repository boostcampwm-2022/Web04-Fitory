import React, { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { toast } from "react-toastify";
import ProfileImageContainer from "src/common/design/ProfileImageContainer";
import PageTemplate from "@pages/PageTemplate";
import useUserInfo from "@hooks/query/user/useUserInfo";
import useUserUpdate from "@hooks/query/user/useUserUpdate";
import toggleBtn from "@public/images/btn_toggle.svg";
import { Gender, UserName, UserIntroduce, UserAge, UserHeight, UserWeight } from "@constants/enums";
import { NICKNAME_REGEX, NUMBER_REGEX } from "@constants/consts";
import { error } from "@constants/message";
import UserAPI from "@api/UserAPI";
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
    if (userInfo.name !== inputValues.name) {
      const isExist = await UserAPI.checkExistUserName(inputValues.name);
      if (isExist) {
        setInputValues({ ...inputValues, name: userInfo.name });
        toast.error(error.CHECK_USER_NAME);
        return;
      }
    }
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
    <PageTemplate isRoot={false} title="????????? ??????">
      <s.ProfileEditForm onSubmit={submitInformation}>
        <s.EditProfileImgButton>
          <ProfileImageContainer
            isModified={false}
            profileImgUrl={userInfo.profileImage}
            setProfileImg={setProfileImage}
          />
        </s.EditProfileImgButton>
        <s.ProfileEditInputContainer>
          <s.ProfileEditLabel>??????</s.ProfileEditLabel>
          <s.ProfileEditInput
            type="text"
            name="userName"
            placeholder="????????? ??????????????????."
            value={inputValues.name}
            onChange={handleChange}
          />
        </s.ProfileEditInputContainer>
        <s.ProfileEditInputContainer>
          <s.ProfileEditLabel>??????</s.ProfileEditLabel>
          <s.ProfileEditInput
            type="text"
            name="introduce"
            placeholder="??????????????? ??????????????????."
            value={inputValues.introduce}
            onChange={handleChange}
          />
        </s.ProfileEditInputContainer>
        <s.PrivateInfoWrapper>
          <s.PrivateInfoToggleHeader>
            <s.ToggleButton type="button" visibleState={visibleState} onClick={openPrivateInfoEdit}>
              <img src={toggleBtn} alt="?????? ???????????? ?????? ??????" />
            </s.ToggleButton>
            <s.PrivateInfoToggle> ?????? ?????? ?????? </s.PrivateInfoToggle>
          </s.PrivateInfoToggleHeader>
          <s.PrivateInfoContainer visibleState={visibleState}>
            <s.ProfileEditInputContainer>
              <s.ProfileEditLabel>??????</s.ProfileEditLabel>
              <s.ProfileEditInput
                type="text"
                name="age"
                placeholder="??? ????????? ??????????????????."
                value={inputValues.age}
                onChange={handleChange}
              />
            </s.ProfileEditInputContainer>
            <s.ProfileEditInputContainer>
              <s.ProfileEditLabel>??????</s.ProfileEditLabel>
              <s.profileGenderButtonWrapper>
                <s.profileGenderButton
                  type="button"
                  isSelected={inputValues.gender === Gender.MALE}
                  onClick={() => setInputValues({ ...inputValues, gender: Gender.MALE })}
                >
                  ???
                </s.profileGenderButton>
                <s.profileGenderButton
                  type="button"
                  isSelected={inputValues.gender === Gender.FEMALE}
                  onClick={() => setInputValues({ ...inputValues, gender: Gender.FEMALE })}
                >
                  ???
                </s.profileGenderButton>
              </s.profileGenderButtonWrapper>
            </s.ProfileEditInputContainer>
            <s.ProfileEditInputContainer>
              <s.ProfileEditLabel>??????</s.ProfileEditLabel>
              <s.ProfileEditInput
                type="text"
                name="height"
                placeholder="????????? ??????????????????."
                value={inputValues.height}
                onChange={handleChange}
              />
            </s.ProfileEditInputContainer>
            <s.ProfileEditInputContainer>
              <s.ProfileEditLabel>??????</s.ProfileEditLabel>
              <s.ProfileEditInput
                type="text"
                name="weight"
                placeholder="????????? ??????????????????."
                value={inputValues.weight}
                onChange={handleChange}
              />
            </s.ProfileEditInputContainer>
          </s.PrivateInfoContainer>
        </s.PrivateInfoWrapper>
        <s.SubmitButton type="submit" disabled={!checkIsActiveSubmitButton()}>
          ?????? ??????
        </s.SubmitButton>
      </s.ProfileEditForm>
    </PageTemplate>
  );
};

export default ProfileEditPage;
