import React, { useState, ChangeEvent } from "react";
import useInputFocus from "@hooks/useInputFocus";
import * as s from "./style";

const NicknameTextField = () => {
  const textFieldRef = useInputFocus();
  const [nickname, setNickname] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value.match(/^[a-zA-Zㄱ-힣0-9]*$/)) {
      return;
    }
    if (e.target.value.length > 12) {
      return;
    }
    setNickname(e.target.value);
  };

  return (
    <s.TextFieldWrapper>
      <s.TextField
        placeholder="닉네임"
        value={nickname}
        ref={textFieldRef}
        onChange={(e) => handleChange(e)}
      />
      <s.Label>영문, 한글, 숫자 2~12자 이내</s.Label>
    </s.TextFieldWrapper>
  );
};

export default NicknameTextField;
