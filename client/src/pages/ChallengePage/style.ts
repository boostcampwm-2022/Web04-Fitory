import styled from "styled-components";
import { DefaultButton } from "@styles/Components";

export const Wrapper = styled.div`
  padding: 20px 0 50px 0;
  gap: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    width: 100%;
    height: fit-content;
    padding: 50px 100px;
    gap: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: ${({ theme }) => theme.MAX_WIDTH.MOBILE}) {
      padding: 30px;
      border-radius: 0;
    }
  }
`;

export const SubmitButton = styled(DefaultButton)`
  width: 80%;
  padding: 15px;
`;
