import React from "react";
import PageTemplate from "@pages/PageTemplate";
import RoutineScroller from "@components/RoutineScroller";
import * as s from "./style";

const RecordPage = () => {
  return (
    <PageTemplate isRoot={false}>
      <s.RoutineWrapper>
        <RoutineScroller />
      </s.RoutineWrapper>
    </PageTemplate>
  );
};

export default RecordPage;
