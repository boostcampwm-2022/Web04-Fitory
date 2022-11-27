import styled from "styled-components";
import { OutlinedTextField } from "@styles/components";
import Theme from "@styles/Theme";

export const Wrapper = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.h3`
  margin-top: 40px;
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
`;

export const AgeTextField = styled(OutlinedTextField)``;

export const GenderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GenderSelectButton = styled.button`
  width: 130px;
  padding: 20px;
  border-radius: 10px;
  filter: contrast(0.3);
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  & > img {
    width: 80%;
  }
  &:hover {
    filter: none;
  }
  ${({ isActive, theme }: { isActive: boolean; theme: typeof Theme }) =>
    isActive && `filter: none; border: 3px solid ${theme.COLORS.LIGHT_BLUE};`}
`;
