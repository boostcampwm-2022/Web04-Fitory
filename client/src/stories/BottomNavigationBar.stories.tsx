import React from "react";
import { MemoryRouter } from "react-router-dom";

import BottomNavigationBar from "../components/BottomNavigationBar/index";

export default {
  title: "components/BottomNavigationBar",
  component: BottomNavigationBar,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const defaultBottomNavigationBar = () => <BottomNavigationBar />;
