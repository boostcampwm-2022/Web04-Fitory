import styled from "styled-components";
import { DefaultTextField, DefaultButton } from "@styles/components";

export const Wrapper = styled.div`
  padding: 20px 0 50px 0;
  gap: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    width: 100%;
    height: fit-content;
    padding: 50px 100px;
    gap: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: ${({ theme }) => theme.MAX_WIDTH.MOBILE}) {
      padding: 30px;
      border-radius: 0;
    }
  }
`;

export const PowerliftingName = styled.h1`
  margin-right: auto;
  color: ${({ theme }) => theme.COLORS.DEEP_BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.LARGE};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;

export const PowerliftingImage = styled.img`
  width: 350px;
  height: 200px;
  @media screen and (max-width: ${({ theme }) => theme.MAX_WIDTH.MOBILE}) {
    width: 100%;
    height: 170px;
  }
`;

export const TextFieldWrapper = styled.div`
  width: 230px;
  padding: 15px 30px;
  border-radius: 30px;
  gap: 20px;
  display: flex;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.COLORS.LIGHT_BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  & > span:last-child {
    color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
  }
`;

export const TextField = styled(DefaultTextField)`
  text-align: end;
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;

export const SubmitButton = styled(DefaultButton)`
  width: 80%;
  padding: 15px;
`;
