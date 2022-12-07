import styled from "styled-components";
import Theme from "@styles/Theme";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;
  padding-top: 50px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const NavigationBar = styled.div`
  padding: 10px;
  display: flex;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  margin-bottom: 50px;
`;

export const NavigationButton = styled.button`
  width: 50%;

  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};

  :first-child {
    font-weight: ${({ theme, isHistogram }: { theme: typeof Theme; isHistogram: boolean }) => {
      if (isHistogram) return theme.FONT_WEIGHT.BOLD;
      return theme.FONT_WEIGHT.DEFAULT;
    }};
    color: ${({ theme, isHistogram }) => {
      return isHistogram ? theme.COLORS.LIGHT_BLUE : theme.COLORS.LIGHT_GRAY;
    }};
  }

  :last-child {
    font-weight: ${({ theme, isHistogram }: { theme: typeof Theme; isHistogram: boolean }) => {
      if (!isHistogram) return theme.FONT_WEIGHT.BOLD;
      return theme.FONT_WEIGHT.DEFAULT;
    }};
    color: ${({ theme, isHistogram }) => {
      return !isHistogram ? theme.COLORS.LIGHT_BLUE : theme.COLORS.LIGHT_GRAY;
    }};
  }
`;

export const StaticsContainer = styled.div`
  display: flex;
  width: 200%;
  text-align: center;
  align-items: center;
`;

export const ChartContainer = styled.div`
  width: 50%;
  padding: 0 5vw;
`;
