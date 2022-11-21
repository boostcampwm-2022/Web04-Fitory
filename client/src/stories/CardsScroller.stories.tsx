import React from "react";
import { Meta, Story } from "@storybook/react";
import CardsScroller, { CardsScrollerProps } from "@components/design/CardsScroller";
import Paper from "@components/design/Paper";

export default {
  title: "components/design/CardsScroller",
  component: CardsScroller,
} as Meta;

const Template: Story<CardsScrollerProps> = (args: CardsScrollerProps) => (
  <CardsScroller {...args} />
);

const children = Array(5)
  .fill(0)
  .map(() => (
    <Paper>
      <div style={{ width: "300px", height: "300px" }} />
    </Paper>
  ));

export const FiveCardsScroller = Template.bind({});
FiveCardsScroller.args = { children };
