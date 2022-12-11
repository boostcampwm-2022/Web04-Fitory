import React, { useState } from "react";
import ProfileImageContainer from "@components/ProfileImageContainer";
import PageTemplate from "@pages/PageTemplate";
import useUserInfo from "@hooks/query/user/useUserInfo";
import toggleBtn from "@public/images/btn_toggle.svg";
import UserAPI from "@api/UserAPI";
import * as s from "./style";
import { authStorage } from "../../services/ClientStorage";

const ProfileEditPage = () => {
  const { userInfo } = useUserInfo(authStorage.get());
  const [visibleState, setVisibleState] = useState(false);

  const openPrivateInfoEdit = () => {
    setVisibleState((prevState) => !prevState);
  };

  const submitInformation = async (e: SubmitEvent & { target: HTMLFormElement }) => {
    e.preventDefault();
    if (e.target) {
      await UserAPI.updateUserInfo({
        userId: authStorage.get(),
        name: e.target.name.value as string,
        age: parseInt(e.target.age.value, 10),
        gender: e.target.gender.value === "남" ? 0 : 1,
        height: parseInt(e.target.height.value, 10),
        weight: parseInt(e.target.weight.value, 10),
        introduce: e.target.introduce.value,
      });
      alert("수정이 완료되었습니다!");
    }
  };

  return (
    <PageTemplate isRoot={false} title="프로필 편집">
      <s.ProfileEditForm onSubmit={submitInformation}>
        <s.EditProfileImgButton>
          <ProfileImageContainer isModified={false} profileImgUrl={userInfo.profileImage} />
        </s.EditProfileImgButton>
        <s.ProfileEditInputContainer>
          <s.ProfileEditLabel>이름</s.ProfileEditLabel>
          <s.ProfileEditInput
            type="text"
            name="name"
            placeholder="이름을 입력해주세요."
            defaultValue={userInfo.name}
          />
        </s.ProfileEditInputContainer>
        <s.ProfileEditInputContainer>
          <s.ProfileEditLabel>자기소개</s.ProfileEditLabel>
          <s.ProfileEditInput
            type="text"
            name="introduce"
            placeholder="자기소개를 입력해주세요."
            defaultValue={userInfo.introduce}
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
                defaultValue={userInfo.age}
              />
            </s.ProfileEditInputContainer>
            <s.ProfileEditInputContainer>
              <s.ProfileEditLabel>성별</s.ProfileEditLabel>
              <s.ProfileEditInput
                type="text"
                name="gender"
                placeholder="성별을 입력해주세요."
                defaultValue={userInfo.gender === 0 ? "남" : "여"}
              />
            </s.ProfileEditInputContainer>
            <s.ProfileEditInputContainer>
              <s.ProfileEditLabel>신장</s.ProfileEditLabel>
              <s.ProfileEditInput
                type="text"
                name="height"
                placeholder="신장을 입력해주세요."
                defaultValue={userInfo.height}
              />
            </s.ProfileEditInputContainer>
            <s.ProfileEditInputContainer>
              <s.ProfileEditLabel>체중</s.ProfileEditLabel>
              <s.ProfileEditInput
                type="text"
                name="weight"
                placeholder="체중을 입력해주세요."
                defaultValue={userInfo.weight}
              />
            </s.ProfileEditInputContainer>
          </s.PrivateInfoContainer>
        </s.PrivateInfoWrapper>
        <s.SubmitButton type="submit"> 수정 완료 </s.SubmitButton>
      </s.ProfileEditForm>
    </PageTemplate>
  );
};

export default ProfileEditPage;
