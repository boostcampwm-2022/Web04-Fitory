import React from "react";
import PageTemplate from "@pages/PageTemplate";
import CalendarHeatMap from "@components/CalendarHeatMap";
import * as s from "./style";

const HomePage = () => {
  return (
    <PageTemplate isRoot>
      <s.Wrapper>
        <CalendarHeatMap />
      </s.Wrapper>
    </PageTemplate>
  );
};

export default HomePage;
