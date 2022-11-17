import React, { LegacyRef, useRef, useState } from "react";
import defaultProfileImage from "@public/images/img_default_profile.svg";
import * as s from "./style";

const ProfileImageContainer = () => {
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
      <s.ImageContainer
        src={image}
        onClick={() => {
          imgRef.current?.click();
        }}
      />
      <input
        type="file"
        style={{ display: "none" }}
        accept="image/jpg, image/png, image/jpeg"
        name="profile_img"
        onChange={onChange}
        ref={imgRef as LegacyRef<HTMLInputElement>}
      />
    </s.Wrapper>
  );
};

export default ProfileImageContainer;
