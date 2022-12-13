import styled from "styled-components";
import Theme from "@styles/Theme";

export const Wrapper = styled.div`
  gap: 20px;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const SearchContainer = styled.div`
  z-index: 1;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  height: ${({ isText }: { isText: boolean }) => {
    return isText ? "800px" : "auto";
  }};
  position: absolute;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: 0.25s linear;
  z-index: 10;
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
  margin-left: 2vw;

  background-color: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: ${({ theme, isText }: { theme: typeof Theme; isText: boolean }) => {
    return isText ? `1px solid ${theme.COLORS.LIGHT_GRAY}` : "none";
  }};

  :focus {
    outline: none;
  }
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

export const RecommendListContainer = styled.div`
  bottom: 0;
  position: absolute;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-bottom: 50px;
`;

export const RecommendItem = styled.div`
  -ms-overflow-style: none;
`;

export const RecommendLabel = styled.p`
  padding: 0 30px;
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  color: ${({ theme }) => theme.COLORS.DEEP_BLUE};
`;

export const Notice = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  text-align: center;
  margin-top: 90px;
`;
