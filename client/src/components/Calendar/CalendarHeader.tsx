import React from "react";
import prevMonthButton from "@public/icons/btn_arrow_left.svg";
import nextMonthButton from "@public/icons/btn_arrow_right.svg";
import dayjs from "dayjs";
import * as s from "./style";

interface CalendarHeaderProps {
  date: dayjs.Dayjs;
  setDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
}

const CalendarHeader = ({ date, setDate }: CalendarHeaderProps) => {
  return (
    <div>
      <s.HeaderContainer>
        <s.MonthMoveButton onClick={() => setDate(date.clone().subtract(1, "month"))}>
          <img src={prevMonthButton} alt="이전 달로 이동" />
        </s.MonthMoveButton>
        <s.DateContainer>
          <div>
            <s.YearContainer>{date.year()}</s.YearContainer>
            <s.MonthContainer>{date.month() + 1}</s.MonthContainer>
          </div>
        </s.DateContainer>
        <s.MonthMoveButton onClick={() => setDate(date.clone().add(1, "month"))}>
          <img src={nextMonthButton} alt="다음 달로 이동" />
        </s.MonthMoveButton>
      </s.HeaderContainer>
      <s.DatesContainer>
        <s.DayNameContainer>S</s.DayNameContainer>
        <s.DayNameContainer>M</s.DayNameContainer>
        <s.DayNameContainer>T</s.DayNameContainer>
        <s.DayNameContainer>W</s.DayNameContainer>
        <s.DayNameContainer>T</s.DayNameContainer>
        <s.DayNameContainer>F</s.DayNameContainer>
        <s.DayNameContainer>S</s.DayNameContainer>
      </s.DatesContainer>
    </div>
  );
};

export default CalendarHeader;
