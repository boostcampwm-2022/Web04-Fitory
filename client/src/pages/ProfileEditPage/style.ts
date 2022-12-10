import styled from "styled-components";

export const EditProfileImgButton = styled.div`
  margin: auto;
  height: 200px;
  width: 200px;
`;

export const ProfileEditWrapper = styled.div`
  text-align: center;
  padding: 5vw;
  color: ${({ theme }) => theme.COLORS.DEEP_BLUE};
  background: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
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
`;

export const SubmitButton = styled.button`
  background: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
  color: ${({ theme }) => theme.COLORS.WHITE};
  width: 80%;
  height: 50px;
  border-radius: 50px;
  margin-top: 50px;
`;

export const PrivateInfoToggleHeader = styled.div`
  display: flex;
  align-items: center;
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
