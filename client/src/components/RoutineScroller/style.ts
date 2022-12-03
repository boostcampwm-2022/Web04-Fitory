import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
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
  width: 100px;
  height: 100px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
  & > img {
    width: 60%;
    filter: invert(1);
  }
  & > p {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
