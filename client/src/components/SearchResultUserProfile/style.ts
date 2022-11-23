import styled from "styled-components";
import Theme from "@styles/Theme";

export const Wrapper = styled.div`
  height: 10vh;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ProfileContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
`;

export const ProfileImgContainer = styled.div`
  width: 8vh;
  height: 8vh;
`;

export const UserInfoContainer = styled.div`
  margin-left: 3vh;
`;

export const UserNameContainer = styled.div`
  color: ${({ theme }) => theme.COLORS.DEEP_BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  margin-bottom: 0.5rem;
`;

export const UserMessageContainer = styled.div`
  color: ${({ userMessage, theme }: { userMessage: string; theme: typeof Theme }) => {
    return userMessage ? theme.COLORS.DEEP_GRAY : theme.COLORS.PLACEHOLDER_GRAY;
  }};
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
`;
