import styled from "styled-components";

export const Wrapper = styled.div`
  height: 13vh;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
`;

export const ProfileImgContainer = styled.div`
  height: 70px;
  width: 70px;
`;

export const UserInfoContainer = styled.div`
  margin-left: 1rem;
`;

export const UserNameContainer = styled.div`
  color: ${({ theme }) => theme.COLORS.DEEP_BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  margin-bottom: 0.5rem;
`;

export const UserMessageContainer = styled.div`
  color: ${({ theme }) => theme.COLORS.DEEP_GRAY};
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
`;
