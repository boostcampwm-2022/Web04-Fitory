import React, { LegacyRef, useRef, useState } from "react";
import defaultProfileImage from "@public/images/img_default_profile.svg";
import editableProfileImage from "@public/images/img_editable_profile.svg";
import { DEFAULT_IMAGE_SRC } from "@constants/consts";
import * as s from "./style";

export interface ProfileImageContainerProps {
  isModified: boolean;
  profileImgUrl?: string;
  setProfileImg?: React.Dispatch<Blob>;
}

const ProfileImageContainer = ({
  isModified,
  profileImgUrl,
  setProfileImg,
}: ProfileImageContainerProps) => {
  const [image, setImage] = useState<string>(profileImgUrl || defaultProfileImage);
  const imgRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent) => {
    const fileReader = new FileReader();
    const file = imgRef.current?.files as FileList;
    fileReader.readAsDataURL(file[0]);
    fileReader.onload = () => {
      setImage(fileReader.result as string);
      if (setProfileImg) {
        const target = e.target as HTMLInputElement;
        if (target.files) setProfileImg(target.files[0]);
      }
    };
  };

  return (
    <s.Wrapper>
      <s.ProfileImgContainer>
        <s.ProfileImg
          src={image === DEFAULT_IMAGE_SRC ? defaultProfileImage : image}
          alt="프로필 사진"
        />
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
