import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 20px;
`;

export const Label = styled.p`
  padding-left: 20px;
  color: ${({ theme }) => theme.COLORS.DEEP_GRAY};
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
  & > span {
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  }
`;

export const RoutineButton = styled.button`
  width: 83px;
  height: 83px;
`;
