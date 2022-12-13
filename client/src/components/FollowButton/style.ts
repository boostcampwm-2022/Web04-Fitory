import styled from "styled-components";
import Theme from "@styles/Theme";
import { DefaultButton } from "@styles/Components";

export const ProfileButton = styled(DefaultButton)`
  width: 100%;
  padding: 5px;
  background-color: ${({ theme, isFollowed }: { theme: typeof Theme; isFollowed: boolean }) =>
    isFollowed ? theme.COLORS.LIGHT_GRAY : theme.COLORS.LIGHT_BLUE};
  border-radius: 50px;
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  @media screen and (max-width: 500px) {
    font-size: ${({ theme }) => theme.FONT_SIZE.TINY_SMALL};
  }
`;
