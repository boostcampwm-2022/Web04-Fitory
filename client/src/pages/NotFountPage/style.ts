import styled from "styled-components";
import { DefaultButton } from "@styles/Components";

export const Wrapper = styled.div`
  gap: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${({ theme }) => theme.MAX_WIDTH.DEFAULT};
`;

export const Logo = styled.img`
  margin-bottom: 50px;
  width: 200px;
`;

export const Title = styled.h1`
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_LARGE};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  & > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
  }
`;

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.COLORS.DEEP_GRAY};
`;

export const HomeNavButton = styled(DefaultButton)`
  margin-top: 50px;
  width: 300px;
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
`;
