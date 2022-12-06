import styled from "styled-components";

export const PageLabel = styled.label`
  color: ${({ theme }) => theme.COLORS.DEEP_BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.LARGE};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;

export const UserInfoContainer = styled.div`
  margin: 30px 0;
  display: flex;
  width: 100%;
  height: 100px;
`;

export const UserProfileImgContainer = styled.div`
  width: 30%;
  height: 100%;
`;

export const UserInfoRow = styled.div`
  margin-left: 10%;
  width: 50%;
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
  color: ${({ theme }) => theme.COLORS.DEEP_GRAY};
`;

export const UserInformation = styled.div`
  height: 25%;
  display: flex;
  align-items: center;
`;

export const InfoLabel = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  color: ${({ theme }) => theme.COLORS.DEEP_BLUE};
  margin-right: 30px;
`;
