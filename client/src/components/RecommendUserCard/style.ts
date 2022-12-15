import styled from "styled-components";

export const Wrapper = styled.div`
  width: 130px;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  display: flex;
  text-align: center;
`;

export const UserInfoContainer = styled.div`
  width: 130px;
`;

export const ProfileImageContainerWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin: auto;
`;

export const UserNameLabel = styled.div`
  margin: 15px 0;
  cursor: pointer;
  color: ${({ theme }) => theme.COLORS.DEEP_BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
`;
