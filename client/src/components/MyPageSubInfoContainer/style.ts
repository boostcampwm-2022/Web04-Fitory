import styled from "styled-components";

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
