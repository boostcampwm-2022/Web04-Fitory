import React from "react";
import arrowLeftSrc from "@public/icons/btn_arrow_left.svg";
import * as s from "./style";

const BackButton = () => {
  return (
    <button type="button">
      <s.Image src={arrowLeftSrc} alt="뒤로가기 버튼" />
    </button>
  );
};

export default BackButton;
