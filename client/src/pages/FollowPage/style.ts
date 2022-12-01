import styled from "styled-components";
import Theme from "@styles/Theme";

export const UserSearchBarContainer = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchBar = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: ${({ theme, isText }: { theme: typeof Theme; isText: boolean }) => {
    return isText ? `1px solid ${theme.COLORS.LIGHT_GRAY}` : "none";
  }};
`;
