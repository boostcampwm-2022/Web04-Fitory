import React from "react";
import { MemoryRouter } from "react-router-dom";

import BottomNavigationBar from "../common/layer/BottomNavigationBar/index";

export default {
  title: "components/BottomNavigationBar",
  component: BottomNavigationBar,
  decorators: [
    (Story: any) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const defaultBottomNavigationBar = () => <BottomNavigationBar />;
