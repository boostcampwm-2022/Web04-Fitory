import React from "react";
import dayjs from "dayjs";
import prevMonthButton from "@public/icons/btn_arrow_left.svg";
import nextMonthButton from "@public/icons/btn_arrow_right.svg";
import * as s from "./style";

interface CalendarHeaderProps {
  date: dayjs.Dayjs;
  setDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
}

const CalendarHeader = ({ date, setDate }: CalendarHeaderProps) => {
  return (
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
  );
};

export default CalendarHeader;
