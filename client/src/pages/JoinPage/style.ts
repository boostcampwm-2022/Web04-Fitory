import styled from "styled-components";

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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextField = styled.input`
  width: 100%;
  padding: 15px 20px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  caret-color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.LARGE};
  &:focus {
    outline-color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
  }
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.PLACEHOLDER_GRAY};
  }
`;

export const Label = styled.p`
  margin-top: 30px;
  color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
`;

export const Button = styled.button`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  &:hover {
    background-color: ${({ theme }) => theme.COLORS.HOVER_BLUE};
  }
`;
