import styled from "styled-components";
import Theme from "@styles/Theme";

export const Wrapper = styled.div`
  gap: 20px;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const SearchContainer = styled.div`
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  height: ${({ isText }: { isText: boolean }) => {
    return isText ? "800px" : "60px";
  }};
  position: absolute;
  padding: 1.3rem 5vw;
  transition: 0.25s linear;
`;

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

export const SearchResultContainer = styled.div`
  height: 90%;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  display: ${({ isText }: { isText: boolean }) => {
    return isText ? "block" : "none";
  }};
  overflow: scroll;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
    width: 0 !important;
  }
`;

export const UserProfile = styled.div`
  padding: 5px 0;
  height: 10%;
  margin-bottom: 10px;
`;

export const RecommendListContainer = styled.div`
  padding-top: 100px;
  height: 300px;
  -ms-overflow-style: none;
`;

export const RecommendLabel = styled.p`
  padding: 0 20px;
  font-size: ${({ theme }) => {
    return theme.FONT_SIZE.MEDIUM;
  }};
  color: ${({ theme }) => theme.COLORS.DEEP_BLUE};
`;

export const UserProfileImg = styled.img`
  width: 100%;
  height: 100%;
  borderradius: 20px;
`;
