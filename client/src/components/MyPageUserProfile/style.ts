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
export const UserNameLabel = styled.label`
  width: 100%;
  font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  color: ${({ theme }) => theme.COLORS.DEEP_BLUE};
`;

export const UserIntroduceContainer = styled.div`
  height: 40px;
  line-height: 40px;
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
  color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Wrapper = styled.div`
  display: flex;
  text-align: center;
`;

export const ContentContainer = styled.div`
  width: calc(100% / 3);
  height: 100px;
`;

export const FollowButton = styled.button`
  width: 100%;
  border: none;
  background-color: transparent;
`;

export const ContentLabel = styled.div`
  height: 30px;
  line-height: 30px;
  width: 100%;
  color: ${({ theme }) => theme.COLORS.DEEP_BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;

export const TierContainer = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.LARGE};
  height: 50px;
  line-height: 50px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  color: ${(props) => props.color};
`;

export const FollowContainer = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.LARGE};
  color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
  height: 50px;
  line-height: 50px;
`;
