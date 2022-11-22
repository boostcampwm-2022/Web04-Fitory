import styled from "styled-components";

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
`;

export const Window = styled.div`
  z-index: 1;
  width: 100%;
  padding: 50px;
  padding-bottom: 100px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  transition: all 0.3s cubic-bezier(0, 0, 0.5, 1) 0s;
  max-width: ${({ theme }) => theme.MAX_WIDTH.default};
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  @media screen and (max-width: ${({ theme }) => theme.MAX_WIDTH.MOBILE}) {
    padding: 30px;
    padding-bottom: 70px;
  }
`;

export const CloseButton = styled.button`
  width: 25px;
  margin-bottom: 30px;
  &:hover {
    filter: opacity(0.7);
  }
  & > img {
    width: 100%;
  }
`;
