import styled from "styled-components";
import { DefaultButton } from "@styles/Components";

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
  padding: 15px;
  gap: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  & > img {
    width: 50%;
    filter: invert(1);
  }
  & > p {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const RoutineDeleteButton = styled.button`
  padding: 1px;
  margin: 8px 8px 0 0;
  width: 17px;
  height: 17px;
  border-radius: 100%;
  position: absolute;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.RED};
  & > img {
    width: 80%;
    filter: invert(1);
  }
  &:hover {
    filter: contrast(0.8);
  }
  display: ${({ visible }: { visible: boolean }) => (visible ? "flex" : "none")};
`;

export const RoutineListAltText = styled.p`
  padding: 30px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
`;

export const DeleteRoutineTitle = styled.h1`
  margin-bottom: 40px;
  font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;

export const ConfirmButton = styled(DefaultButton)`
  width: 100%;
  margin-bottom: 40px;
  background-color: ${({ theme }) => theme.COLORS.RED};
  &:hover {
    background-color: ${({ theme }) => theme.COLORS.HOVER_RED};
  }
`;
