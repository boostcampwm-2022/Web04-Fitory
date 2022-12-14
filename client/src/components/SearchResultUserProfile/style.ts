import styled from "styled-components";
import Theme from "@styles/Theme";

export const Wrapper = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  align-items: center;
`;

export const ProfileContainer = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  align-items: center;
`;

export const ProfileImgContainer = styled.div`
  height: 60px;
  width: 60px;
`;

export const UserInfoContainer = styled.div`
  margin-left: 20px;
  flex-grow: 1;
  width: 1px;
`;

export const UserNameContainer = styled.div`
  color: ${({ theme }) => theme.COLORS.DEEP_BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  margin-bottom: 0.5rem;
`;

export const UserMessageContainer = styled.p`
  width: 100%;
  color: ${({ userMessage, theme }: { userMessage: string | undefined; theme: typeof Theme }) => {
    return userMessage ? theme.COLORS.LIGHT_GRAY : theme.COLORS.PLACEHOLDER_GRAY;
  }};
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
  text-align: left;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ButtonContainer = styled.div`
  width: 20%;
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
`;
