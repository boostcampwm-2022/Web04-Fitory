import React from "react";
import { Meta } from "@storybook/react";
import Calendar from "../components/Calendar";

export default {
  title: "components/Calendar",
  component: Calendar,
} as Meta;

export const DefaultCalendar = () => <Calendar />;
