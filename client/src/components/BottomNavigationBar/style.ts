import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.nav`
  position: fixed;
  display: flex;
  left: 0;
  bottom: 0;
  height: 56px;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid #f5f5f5;
  border-radius: 20px 20px 0px 0px;
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
