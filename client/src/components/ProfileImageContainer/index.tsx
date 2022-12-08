import React, { LegacyRef, useRef, useState } from "react";
import defaultProfileImage from "@public/images/img_default_profile.svg";
import editableProfileImage from "@public/images/img_editable_profile.svg";
import * as s from "./style";

export interface ProfileImageContainerProps {
  isModified: boolean;
  profileImgUrl?: string;
}

const ProfileImageContainer = ({ isModified, profileImgUrl }: ProfileImageContainerProps) => {
  const [image, setImage] = useState<string>(profileImgUrl || defaultProfileImage);
  const imgRef = useRef<HTMLInputElement>(null);

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (e.target instanceof HTMLImageElement) {
      e.target.src = defaultProfileImage;
    }
  };

  const handleChange = () => {
    const fileReader = new FileReader();
    const file = imgRef.current?.files as FileList;
    fileReader.readAsDataURL(file[0]);
    fileReader.onload = () => {
      setImage(fileReader.result as string);
    };
  };
  return (
    <s.Wrapper>
      <s.ProfileImgContainer>
        <s.ProfileImg src={image} alt="프로필 사진" onError={handleImgError} />
        <s.EditProfileImgContainer>
          <s.EditProfileImg
            src={editableProfileImage}
            hidden={isModified}
            onClick={() => {
              imgRef.current?.click();
            }}
          />
        </s.EditProfileImgContainer>
      </s.ProfileImgContainer>
      <input
        disabled={isModified}
        type="file"
        style={{ display: "none" }}
        accept="image/*"
        name="profile_img"
        onChange={handleChange}
        ref={imgRef as LegacyRef<HTMLInputElement>}
      />
    </s.Wrapper>
  );
};

export default ProfileImageContainer;
