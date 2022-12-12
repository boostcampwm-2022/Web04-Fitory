import styled from "styled-components";
import { DefaultButton } from "@styles/Components";

export const EditProfileImgButton = styled.div`
  margin: auto;
  height: 200px;
  width: 200px;
`;

export const ProfileEditForm = styled.form`
  text-align: center;
  padding: 50px 150px;
  color: ${({ theme }) => theme.COLORS.DEEP_BLUE};
  background: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  @media screen and (max-width: ${({ theme }) => theme.MAX_WIDTH.MOBILE}) {
    padding: 20px;
  }
`;

export const ProfileEditInputContainer = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
  margin-top: 20px;
`;

export const ProfileEditLabel = styled.div`
  text-align: right;
  width: 30%;
  padding-right: 5vh;
`;

export const ProfileEditInput = styled.input`
  width: 70%;
  height: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.PLACEHOLDER_GRAY};
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
`;

export const SubmitButton = styled(DefaultButton)`
  width: 100%;
  border-radius: 50px;
  margin-top: 50px;
`;

export const PrivateInfoToggleHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.DEFAULT};
`;

export const ToggleButton = styled.button`
  height: 13px;
  width: 30%;
  text-align: right;
  padding-right: 5vh;
  & > img {
    transform: rotate(
      ${({ visibleState }: { visibleState: boolean }) => (visibleState ? "90deg" : "0deg")}
    );
  }
`;

export const PrivateInfoContainer = styled.div`
  display: ${({ visibleState }: { visibleState: boolean }) => (visibleState ? "block" : "none")};
`;

export const PrivateInfoWrapper = styled.div`
  margin-top: 30px;
`;

export const PrivateInfoToggle = styled.div`
  text-align: left;
  width: 70%;
`;
