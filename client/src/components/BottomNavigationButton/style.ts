import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LinkButton = styled(NavLink)`
  width: 5%;
  filter: ${({ theme }) => theme.COLORS.FILTER_GRAY};
  &.active {
    filter: ${({ theme }) => theme.COLORS.FILTER_BLUE};
  }
  & > img {
    width: 100%;
  }
`;
