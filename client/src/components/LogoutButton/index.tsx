import React from "react";
import { useNavigate } from "react-router-dom";
import UserAPI from "@api/UserAPI";
import { RoutePath } from "@constants/enums";
import Modal from "@components/design/Modal";
import modalStore from "@stores/modalStore";
import { authStorage } from "src/services/ClientStorage";
import * as s from "./style";

const LogoutButton = () => {
  const navigate = useNavigate();
  const { openModal } = modalStore();

  const handleOpenLogoutModal = () => {
    openModal();
  };

  const handleClickLogoutButton = async () => {
    await UserAPI.logout();
    authStorage.remove();
    navigate(RoutePath.LOGIN, { replace: true });
  };

  return (
    <s.Wrapper>
      <s.Button onClick={handleOpenLogoutModal}>로그아웃</s.Button>
      <Modal>
        <s.LogoutTitle>정말로 로그아웃 하시겠어요?</s.LogoutTitle>
        <s.ConfirmButton onClick={handleClickLogoutButton}>로그아웃</s.ConfirmButton>
      </Modal>
    </s.Wrapper>
  );
};

export default LogoutButton;
