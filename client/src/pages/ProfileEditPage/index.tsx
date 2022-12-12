import React, { useState } from "react";
import ProfileImageContainer from "@components/ProfileImageContainer";
import PageTemplate from "@pages/PageTemplate";
import useUserInfo from "@hooks/query/user/useUserInfo";
import toggleBtn from "@public/images/btn_toggle.svg";
import UserAPI from "@api/UserAPI";
import { QueryKey } from "@constants/enums";
import { useQueryClient } from "react-query";
import * as s from "./style";
import { authStorage } from "../../services/ClientStorage";

const ProfileEditPage = () => {
  const queryClient = useQueryClient();
  const { userInfo } = useUserInfo(authStorage.get());
  const [visibleState, setVisibleState] = useState(false);
  const [profileImg, setProfileImg] = useState<Blob>();

  const openPrivateInfoEdit = () => {
    setVisibleState((prevState) => !prevState);
  };

  const submitInformation = async (
    e: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement },
  ) => {
    e.preventDefault();
    if (e.target) {
      const formData = new FormData();
      formData.append("userId", authStorage.get().toString());
      formData.append("name", e.target.userName.value);
      formData.append("age", e.target.age.value);
      formData.append("gender", e.target.gender.value === "남" ? "0" : "1");
      formData.append("height", e.target.height.value);
      formData.append("weight", e.target.weight.value);
      formData.append("introduce", e.target.introduce.value);
      if (profileImg) {
        formData.append("images", profileImg);
      }
      await UserAPI.updateUserInfo(formData);
      await queryClient.invalidateQueries([QueryKey.USER_INFO, authStorage.get()]);
      alert("수정이 완료되었습니다!");
    }
  };
  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    if (target.files) setProfileImg(target.files[0]);
  };

  return (
    <PageTemplate isRoot={false} title="프로필 편집">
      <s.ProfileEditForm onSubmit={submitInformation}>
        <s.EditProfileImgButton>
          <ProfileImageContainer
            isModified={false}
            profileImgUrl={userInfo.profileImage}
            setProfileImg={setProfileImg}
          />
        </s.EditProfileImgButton>
        <s.ProfileEditInputContainer>
          <s.ProfileEditLabel>이름</s.ProfileEditLabel>
          <s.ProfileEditInput
            type="text"
            name="userName"
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
          <input type="file" accept="image/*" name="profile_img" onChange={handleChange} />
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
