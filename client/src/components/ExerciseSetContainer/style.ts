import styled from "styled-components";

export const CheckedImg = styled.img`
  width: 30px;
  height: 30px;
  margin: auto;
`;

export const FailCheckedImg = styled(CheckedImg)`
  filter: opacity(0.3);
`;

export const ExerciseHistoryHeader = styled.div`
  gap: 30px;
  display: flex;
  align-items: flex-start;
`;

export const ToggleButton = styled.button`
  width: 13px;
  height: 13px;
  & > img {
    width: 100%;
    transform: rotate(
      ${({ visibleState }: { visibleState: boolean }) => (visibleState ? "90deg" : "0deg")}
    );
  }
`;

export const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  height: 50px;
  border-bottom: 2px solid ${({ theme }) => theme.COLORS.DEEP_BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
`;

export const SetRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;

  height: 50px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_GRAY};

  font-weight: ${({ theme }) => theme.FONT_WEIGHT.DEFAULT};
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
`;

export const Wrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  padding: 20px;
  color: ${({ theme }) => theme.COLORS.DEEP_BLUE};
  transition: 0.25s linear;
`;

export const ExerciseInfoWrapper = styled.div`
  padding-top: ${({ visibleState }: { visibleState: boolean }) => visibleState && "15px"};
`;

export const SetNameLabel = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;

export const AttributeLabel = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  line-height: 50px;
`;
