import styled from "styled-components";
import Theme from "@styles/Theme";

export const ProfileButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
  color: ${({ followState, theme }: { followState: boolean; theme: typeof Theme }) => {
    if (followState) {
      return theme.COLORS.LIGHT_BLUE;
    }
    return theme.COLORS.LIGHT_GRAY;
  }}
  border-radius: 50px;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;
