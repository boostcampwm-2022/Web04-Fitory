import React, { ChangeEvent } from "react";
import useInputFocus from "@hooks/useInputFocus";
import { UserName } from "@constants/enums";
import { NICKNAME_REGEX } from "@constants/consts";
import * as UserType from "src/types/user";
import * as s from "./style";

interface NicknameTextFieldProps {
  nickname: UserType.UserName;
  setNickname: (name: UserType.UserName) => void;
}

const NicknameTextField = ({ nickname, setNickname }: NicknameTextFieldProps) => {
  const textFieldRef = useInputFocus();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value.match(NICKNAME_REGEX)) {
      return;
    }
    if (e.target.value.length > UserName.MAX) {
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
