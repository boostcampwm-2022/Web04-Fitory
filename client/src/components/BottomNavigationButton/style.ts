import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const LinkButton = styled(NavLink)`
  text-align: center;
  width: 25%;

  background-color: transparent;
  border: none;
  filter: ${({ theme }) => theme.COLORS.FILTER_GRAY};

  &.active {
    filter: ${({ theme }) => theme.COLORS.FILTER_BLUE};
  }
`;
