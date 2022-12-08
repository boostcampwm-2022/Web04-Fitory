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
  gap: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_LARGE};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  @media screen and (max-width: ${({ theme }) => theme.MAX_WIDTH.MOBILE}) {
    font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM};
  }
  & > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
    font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_LARGE};
  }
`;

export const SorryText = styled.h2`
  margin-top: 50px;
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_LARGE};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  color: ${({ theme }) => theme.COLORS.DEEP_GRAY};
`;

export const ReloadButton = styled(DefaultButton)`
  margin-top: 50px;
  width: 300px;
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
`;
