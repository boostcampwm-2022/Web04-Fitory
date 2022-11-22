import styled from "styled-components";
import Theme from "@styles/Theme";
import { DayTypes } from "@constants/enums";

// index
export const Wrapper = styled.div`
  border: 1px solid;
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

// Body
export const CalendarBody = styled.table`
  width: 100%;
  font-size: ${({ theme }) => {
    return theme.FONT_SIZE.MEDIUM;
  }};
`;

// Element
export const DayContainer = styled.td`
  width: calc((100vw - 40px) / 7);
  height: calc((100vw - 40px) / 7);
  vertical-align: middle;
  color: ${({ dayType, theme }: { dayType: any; theme: typeof Theme }) => {
    switch (dayType) {
      case DayTypes.OTHER_DAYS:
        return theme.COLORS.LIGHT_GRAY;
      case DayTypes.SATURDAY:
        return theme.COLORS.LIGHT_BLUE;
      case DayTypes.SUNDAY:
        return theme.COLORS.RED;
      default:
        return theme.COLORS.DEEP_BLUE;
    }
  }};

  background-color: ${({ dayType, theme }: { dayType: any; theme: typeof Theme }) => {
    return dayType === DayTypes.TODAY ? theme.COLORS.LIGHT_PURPLE : "transparent";
  }}};
`;

export const DayLabel = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  line-height: 2.5rem;
  margin: auto;
`;

export const CompleteDot = styled.div`
  margin: 0 auto;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => {
    return theme.COLORS.LIGHT_PURPLE;
  }};
`;
