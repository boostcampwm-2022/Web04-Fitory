import styled from "styled-components";
import Theme from "@styles/Theme";

export const DefaultTextField = styled.input`
  width: 100%;
  border: none;
  caret-color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
  &:focus {
    outline: none;
  }
`;

export const OutlinedTextField = styled.input`
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

export const DefaultButton = styled.button`
  padding: 10px 30px;
  border-radius: 15px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  &:hover {
    background-color: ${({ theme }) => theme.COLORS.HOVER_BLUE};
  }
  ${({ disabled, theme }: { disabled?: boolean; theme: typeof Theme }) => `
    background-color: ${disabled ? theme.COLORS.LIGHT_GRAY : theme.COLORS.LIGHT_BLUE};
    cursor: ${disabled ? "default" : "pointer"};
    &:hover {
      background-color: ${!disabled ? theme.COLORS.HOVER_BLUE : theme.COLORS.LIGHT_GRAY};
    }
  `};
`;
