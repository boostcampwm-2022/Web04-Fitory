import styled from "styled-components";
import challengeSrc from "@public/images/btn_challenge.jpeg";

export const Wrapper = styled.div`
  gap: 20px;
  padding: 20px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  padding: 10px 30px;
  border-radius: 15px;
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
  transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
`;

export const ChallengeButton = styled(Button)`
  width: 95%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: url(${challengeSrc}) no-repeat center;
  background-size: cover;
  filter: saturate(0.3);
  &:hover {
    box-shadow: rgb(0 0 0 / 20%) 2px 4px 12px;
    transform: scale3d(1.01, 1.01, 1.01);
    filter: saturate(1);
  }
`;

export const RecordButton = styled(Button)`
  position: fixed;
  bottom: 80px;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
  box-shadow: rgb(0 0 0 / 30%) 2px 4px 12px;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.HOVER_BLUE};
    box-shadow: rgb(0 0 0 / 35%) 2px 4px 12px;
    transform: scale3d(1.01, 1.01, 1.01);
  }
`;
