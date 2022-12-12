import styled from "styled-components";
import Theme from "@styles/Theme";

export const ProfileButton = styled.button`
  width: 100%;
  padding: 5px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme, isFollowed }: { theme: typeof Theme; isFollowed: boolean }) =>
    isFollowed ? theme.COLORS.LIGHT_GRAY : theme.COLORS.LIGHT_BLUE};
  border-radius: 50px;
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;
