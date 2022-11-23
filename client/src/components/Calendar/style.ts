import styled from "styled-components";
import Theme from "@styles/Theme";
import { DayTypes, ExerciseState } from "@constants/enums";

// index
export const Wrapper = styled.div`
  width: 100%;
  border-radius: 20px;
  text-align: center;
  padding: 20px;

  font-weight: ${({ theme }) => {
    return theme.FONT_WEIGHT.BOLD;
  }};
  background-color: ${({ theme }) => {
    return theme.COLORS.WHITE;
  }};
`;

// header
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;

  img {
    filter: ${({ theme }) => theme.COLORS.FILTER_GRAY};
  }
`;

export const DateContainer = styled.div`
  margin: 0 30%;
`;

export const YearContainer = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
  color: ${({ theme }) => theme.COLORS.DEEP_GRAY};
`;

export const MonthContainer = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.LARGE};
  color: ${({ theme }) => theme.COLORS.DEEP_BLUE};
`;

export const MonthMoveButton = styled.button`
  background-color: transparent;
  border: none;
`;

export const DatesContainer = styled.div`
  margin: 0.8rem 0;
  width: 100%;
  display: flex;
  text-align: center;
  font-size: ${({ theme }) => {
    return theme.FONT_SIZE.EXTRA_SMALL;
  }};
`;
export const DayNameContainer = styled.div`
  width: calc((100vw - 40px) / 7);
`;

// Body
export const CalendarBody = styled.table`
  width: 100%;
  font-size: ${({ theme }) => {
    return theme.FONT_SIZE.EXTRA_SMALL;
  }};
`;

// Element
export const DayContainer = styled.td`
  vertical-align: middle;
  color: ${({ dayType, theme }: { dayType: DayTypes; theme: typeof Theme }) => {
    if (dayType === DayTypes.OTHER_DAYS) {
      return theme.COLORS.LIGHT_GRAY;
    }
    if (dayType === DayTypes.TODAY) {
      return theme.COLORS.WHITE;
    }
    return theme.COLORS.DEEP_BLUE;
  }};
`;

export const DayLabel = styled.div`
  width: 2.5rem;
  line-height: 2.5rem;
  margin: auto;
  border-radius: 50%;
  background-color: ${({ dayType, theme }: { dayType: DayTypes; theme: typeof Theme }) => {
    return dayType === DayTypes.TODAY ? theme.COLORS.LIGHT_BLUE : "transparent";
  }};
`;

export const CompleteDot = styled.div`
  margin: 0.5rem auto;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${({ state, theme }: { state: ExerciseState; theme: typeof Theme }) => {
    return state === ExerciseState.EXERCISE ? theme.COLORS.LIGHT_PURPLE : "transparent";
  }};
`;
