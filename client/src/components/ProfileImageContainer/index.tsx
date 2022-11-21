import React, { LegacyRef, useRef, useState } from "react";
import defaultProfileImage from "@public/images/img_default_profile.svg";
import editableProfileImage from "@public/images/img_editable_profile.svg";
import * as s from "./style";

const ProfileImageContainer = ({ isModified }: { isModified: boolean }) => {
  const [image, setImage] = useState<string>(defaultProfileImage);
  const imgRef = useRef<HTMLInputElement>(null);
  const onChange = () => {
    const fileReader = new FileReader();
    const file = imgRef.current?.files as FileList;
    fileReader.readAsDataURL(file[0]);
    fileReader.onload = () => {
      setImage(fileReader.result as string);
    };
  };
  return (
    <s.Wrapper>
      <s.ImageContainer src={image} />
      <s.ImageContainer
        src={editableProfileImage}
        hidden={isModified}
        onClick={() => {
          imgRef.current?.click();
        }}
      />
      <input
        disabled={isModified}
        type="file"
        style={{ display: "none" }}
        accept="image/*"
        name="profile_img"
        onChange={onChange}
        ref={imgRef as LegacyRef<HTMLInputElement>}
      />
    </s.Wrapper>
  );
};

export default ProfileImageContainer;
