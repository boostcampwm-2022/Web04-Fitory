import styled from "styled-components";

export const UserNameLabel = styled.label`
  width: 100%;
  font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  color: ${({ theme }) => theme.COLORS.DEEP_BLUE};
`;

export const UserIntroduceContainer = styled.div`
  height: 40px;
  line-height: 40px;
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
  color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
`;
