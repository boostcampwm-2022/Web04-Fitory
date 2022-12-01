import React from "react";
import { Meta } from "@storybook/react";
import TierGraph from "@components/TierGraph";

export default {
  title: "components/TierGraph",
  component: TierGraph,
} as Meta;

export const TierGraphCalendar = () => <TierGraph />;
