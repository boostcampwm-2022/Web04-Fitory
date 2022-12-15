import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Story } from "@storybook/react";

import BottomNavigationBar from "../common/layer/BottomNavigationBar/index";

export default {
  title: "components/BottomNavigationBar",
  component: BottomNavigationBar,
  decorators: [
    (Template: Story) => (
      <MemoryRouter>
        <Template />
      </MemoryRouter>
    ),
  ],
};

export const defaultBottomNavigationBar = () => <BottomNavigationBar />;
