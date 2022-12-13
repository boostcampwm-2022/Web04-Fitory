import styled from "styled-components";

export const Wrapper = styled.div`
  width: 150px;
  height: 200px;
  padding: 10px;
  text-align: center;
`;

export const UserInfoContainer = styled.div`
  width: 130px;
  height: 145px;
`;

export const ProfileImageContainerWrapper = styled.div`
  width: 90px;
  height: 90px;
  margin: auto;
`;

export const UserNameLabel = styled.div`
  margin: 20px 0;
  color: ${({ theme }) => theme.COLORS.DEEP_BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
`;
