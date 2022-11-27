import styled from "styled-components";
import { DefaultButton } from "@styles/components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 80px 100px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  @media screen and (max-width: ${({ theme }) => theme.MAX_WIDTH.MOBILE}) {
    padding: 80px 30px;
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE.LARGE};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;

export const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TextFieldWrapper = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NextButton = styled(DefaultButton)`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
`;
