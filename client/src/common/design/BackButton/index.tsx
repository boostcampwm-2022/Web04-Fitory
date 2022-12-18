import React from "react";
import arrowLeftSrc from "@public/icons/btn_arrow_left.svg";
import * as s from "./style";

const BackButton = ({ onClick }: { onClick?: () => void }) => {
  const handleOnClick = () => {
    if (onClick) {
      onClick();
      return;
    }
    window.history.back();
  };

  return (
    <button type="button" onClick={handleOnClick}>
      <s.Image src={arrowLeftSrc} alt="뒤로가기 버튼" />
    </button>
  );
};

export default BackButton;
