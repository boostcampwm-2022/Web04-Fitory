import styled from "styled-components";

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
