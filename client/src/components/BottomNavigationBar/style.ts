import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid #f5f5f5;
  border-radius: 20px 20px 0px 0px;
`;

export const Content = styled.nav`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${({ theme }) => theme.MAX_WIDTH.default};
`;

export const LinkButton = styled(NavLink)`
  width: 25%;
  background-color: transparent;
  border: none;
  filter: ${({ theme }) => theme.COLORS.FILTER_GRAY};

  &.active {
    filter: ${({ theme }) => theme.COLORS.FILTER_BLUE};
  }
`;
