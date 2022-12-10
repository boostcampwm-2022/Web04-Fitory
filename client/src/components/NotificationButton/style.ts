import styled from "styled-components";
import { Link } from "react-router-dom";

export const NotificatonLink = styled(Link)`
  display: flex;
  justify-content: flex-end;
`;

export const NotificationCount = styled.div`
  top: 12px;
  padding: 3px;
  border-radius: 10px;
  width: fit-content;
  height: fit-content;
  position: absolute;
  color: white;
  font-size: 0.9rem;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  background-color: ${({ theme }) => theme.COLORS.RED};
`;
