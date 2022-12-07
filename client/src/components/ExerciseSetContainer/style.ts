import styled from "styled-components";

export const CheckedImg = styled.img`
  width: 25%;
  height: 70%;
`;

export const ExerciseHistoryHeader = styled.div`
  display: flex;
`;

export const ToggleButton = styled.img`
  height: 100%;
  transform: rotate(${(props) => (props.visibleState ? "90deg" : "0deg")});
`;

export const HeaderRow = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.COLORS.DEEP_BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
`;

export const SetRow = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DEEP_BLUE};

  font-weight: ${({ theme }) => theme.FONT_WEIGHT.DEFAULT};
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
`;

export const Wrapper = styled.div`
  margin-top: 50px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  padding: 20px;
  border-radius: 20px;

  text-align: center;
  color: ${({ theme }) => theme.COLORS.DEEP_BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};

  transition: 0.25s linear;
`;

export const SetNameLabel = styled.div`
  text-align: left;
  width: 100%;
  margin-left: 30px;
`;

export const AttributeLabel = styled.div`
  text-align: center;
  width: 25%;
  height: 100%;
  line-height: 50px;
`;
