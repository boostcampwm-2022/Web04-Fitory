import styled from "styled-components";

export const Button = styled.button`
  border-radius: 20px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  &:hover {
    background-color: ${({ theme }) => theme.COLORS.HOVER_BLUE};
  }
  ${({ full, small }: { full: boolean; small: boolean }) => `
    width: ${full ? "100%" : "fit-content"};
    padding: ${small ? "8px 30px" : "15px 30px"};
  `};
`;

export default { Button };
