import React, { useState } from "react";
import ProfileImageContainer from "@components/ProfileImageContainer";
import PageTemplate from "@pages/PageTemplate";
import useUserInfo from "@hooks/query/user/useUserInfo";
import toggleBtn from "@public/images/btn_toggle.svg";
import * as s from "./style";
import { authStorage } from "../../services/ClientStorage";

const ProfileEditPage = () => {
  const { userInfo } = useUserInfo(authStorage.get());
  const [visibleState, setVisibleState] = useState(false);

  const openPrivateInfoEdit = () => {
    setVisibleState((prevState) => !prevState);
  };

  const submitInformation = () => {};

  return (
    <PageTemplate isRoot={false} title="프로필 편집">
      <s.ProfileEditWrapper>
        <s.EditProfileImgButton>
          <ProfileImageContainer isModified={false} profileImgUrl={userInfo.profileImage} />
        </s.EditProfileImgButton>
        <s.ProfileEditInputContainer>
          <s.ProfileEditLabel>이름</s.ProfileEditLabel>
          <s.ProfileEditInput
            type="text"
            placeholder="이름을 입력해주세요."
            defaultValue={userInfo.name}
          />
        </s.ProfileEditInputContainer>
        <s.ProfileEditInputContainer>
          <s.ProfileEditLabel>자기소개</s.ProfileEditLabel>
          <s.ProfileEditInput
            type="text"
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
                placeholder="만 나이를 입력해주세요."
                defaultValue={userInfo.age}
              />
            </s.ProfileEditInputContainer>
            <s.ProfileEditInputContainer>
              <s.ProfileEditLabel>성별</s.ProfileEditLabel>
              <s.ProfileEditInput
                type="text"
                placeholder="성별을 입력해주세요."
                defaultValue={userInfo.gender === 0 ? "남" : "여"}
              />
            </s.ProfileEditInputContainer>
            <s.ProfileEditInputContainer>
              <s.ProfileEditLabel>신장</s.ProfileEditLabel>
              <s.ProfileEditInput
                type="text"
                placeholder="신장을 입력해주세요."
                defaultValue={userInfo.height}
              />
            </s.ProfileEditInputContainer>
            <s.ProfileEditInputContainer>
              <s.ProfileEditLabel>체중</s.ProfileEditLabel>
              <s.ProfileEditInput
                type="text"
                placeholder="체중을 입력해주세요."
                defaultValue={userInfo.weight}
              />
            </s.ProfileEditInputContainer>
          </s.PrivateInfoContainer>
        </s.PrivateInfoWrapper>
        <s.SubmitButton onClick={submitInformation}> 수정 완료 </s.SubmitButton>
      </s.ProfileEditWrapper>
    </PageTemplate>
  );
};

export default ProfileEditPage;
