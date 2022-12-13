import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  gap: 20px;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const SearchContainer = styled.div`
  border-radius: 20px;
  width: 100%;
  height: 60px;
  margin-bottom: 20px;
`;

export const UserSearchBarContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-bottom: ${({ theme }) => {
    return `1px solid ${theme.COLORS.LIGHT_GRAY}}`;
  }};
`;

export const SearchBar = styled.input`
  width: 100%;
  height: 100%;
  margin-left: 3vw;
  background-color: transparent;
  border: none;

  :focus {
    outline: none;
  }
`;
