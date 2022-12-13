import styled from "styled-components";

export const PageLabel = styled.label`
  color: ${({ theme }) => theme.COLORS.DEEP_BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.LARGE};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;

export const UserInfoContainer = styled.div`
  margin-bottom: 25px;
  width: 100%;
  height: 100px;
  gap: 10px;
  display: flex;
  align-items: center;
`;

export const UserProfileImgContainer = styled.div`
  width: 130px;
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & img {
    width: 80%;
    height: 80%;
    margin: 10%;
  }
`;

export const UserInfoRow = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
  color: ${({ theme }) => theme.COLORS.DEEP_GRAY};
  flex-grow: 1;
  gap: 15px;
  display: flex;
  justify-content: space-around;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.PLACEHOLDER_GRAY};
`;

export const UserInformation = styled.div`
  height: 25%;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoLabel = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  color: ${({ theme }) => theme.COLORS.DEEP_BLUE};
`;

export const UserNameLabel = styled.label`
  width: 100%;
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  color: ${({ theme }) => theme.COLORS.DEEP_BLUE};
`;

export const UserIntroduceContainer = styled.div`
  margin: 10px 0;
  line-height: 20px;
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
`;

export const UserNameWrapper = styled.div`
  flex-grow: 1;
  width: 1px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.PLACEHOLDER_GRAY};
`;

export const Wrapper = styled.div`
  display: flex;
  text-align: center;
  padding-top: 20px;
`;

export const ContentContainer = styled.div`
  width: calc(100% / 3);
  margin-bottom: 20px;
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
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;

export const TierContainer = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
  line-height: 30px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  color: ${(props) => props.color};
`;

export const FollowContainer = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
  color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
  line-height: 30px;
`;

export const ButtonContainer = styled.div`
  height: 50px;
  width: 100%;
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
`;
