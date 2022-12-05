import styled from "styled-components";
import Theme from "@styles/Theme";
import { DayTypes, ExerciseState } from "@constants/enums";

// index
export const Wrapper = styled.div`
  margin: auto;
  width: 100%;
  border-radius: 20px;
  text-align: center;
  padding: 30px 50px;
  font-weight: ${({ theme }) => {
    return theme.FONT_WEIGHT.BOLD;
  }};
  @media screen and (max-width: ${({ theme }) => theme.MAX_WIDTH.MOBILE}) {
    padding: 20px;
  }
`;

// header
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: ${({ theme }) => `1px solid ${theme.COLORS.PLACEHOLDER_GRAY}`};
  padding-bottom: 20px;
  margin-bottom: 10px;
  img {
    filter: ${({ theme }) => theme.COLORS.FILTER_GRAY};
  }
`;

export const DateContainer = styled.div`
  margin: 0 30%;
`;

export const YearContainer = styled.div`
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.FONT_SIZE.LARGE};
  color: ${({ theme }) => theme.COLORS.DEEP_GRAY};
`;

export const MonthContainer = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM};
  color: ${({ theme }) => theme.COLORS.DEEP_BLUE};
`;

export const MonthMoveButton = styled.button`
  background-color: transparent;
  border: none;
`;

// Body
export const CalendarBody = styled.table`
  margin: auto;
  width: fit-content;
  border-spacing: 15px;
  border-collapse: separate;
  font-size: ${({ theme }) => {
    return theme.FONT_SIZE.EXTRA_SMALL;
  }};
  & td {
    width: 40px;
    height: 40px;
  }
  @media screen and (max-width: ${({ theme }) => theme.MAX_WIDTH.MOBILE}) {
    border-spacing: 1px;
  }
`;

export const DayName = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${({ theme }) => {
    return theme.FONT_WEIGHT.DEFAULT;
  }};
`;

// Element
export const DayContainer = styled.td`
  color: ${({ dayType, theme }: { dayType: DayTypes; theme: typeof Theme }) => {
    if (dayType === DayTypes.OTHER_DAYS) {
      return theme.COLORS.LIGHT_GRAY;
    }
    if (dayType === DayTypes.TODAY) {
      return theme.COLORS.WHITE;
    }
    return theme.COLORS.DEEP_GRAY;
  }};
`;

export const DayLabel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding-bottom: 4px;
  border-radius: 8px;
  background-color: ${({ dayType, theme }: { dayType: DayTypes; theme: typeof Theme }) => {
    return dayType === DayTypes.TODAY ? theme.COLORS.LIGHT_BLUE : "transparent";
  }};
`;

export const CompleteDot = styled.div`
  position: relative;
  top: -10px;
  margin: 0 auto;
  width: 50%;
  height: 3px;
  background-color: ${({
    state,
    dayType,
    theme,
  }: {
    state: ExerciseState;
    dayType: DayTypes;
    theme: typeof Theme;
  }) => {
    if (state === ExerciseState.EXERCISE) {
      if (dayType === DayTypes.TODAY) {
        return theme.COLORS.WHITE;
      }
      return theme.COLORS.LIGHT_PURPLE;
    }
    return undefined;
  }};
`;
