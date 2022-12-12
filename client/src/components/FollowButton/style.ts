import styled from "styled-components";
import Theme from "@styles/Theme";

export const ProfileButton = styled.button`
  width: 100%;
  height: 35px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme, followState }: { theme: typeof Theme; followState: boolean }) =>
    followState ? theme.COLORS.LIGHT_BLUE : theme.COLORS.LIGHT_GRAY};
  border-radius: 50px;
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  @media screen and (max-width: 500px) {
    font-size: ${({ theme }) => theme.FONT_SIZE.TINY_SMALL};
  }
`;
