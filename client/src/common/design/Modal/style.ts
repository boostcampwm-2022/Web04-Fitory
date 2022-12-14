import styled from "styled-components";

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Wrapper = styled(Overlay)`
  justify-content: center;
  ${({ isShow, isCenter }: { isShow: boolean; isCenter: boolean }) => {
    let style = `display: ${isShow ? "flex" : "none"};`;
    if (isCenter) {
      style += "align-items: center;";
    }
    return style;
  }}
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Window = styled.div`
  z-index: 2;
  width: 100%;
  padding: 50px;
  padding-bottom: 100px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  ${({ isCenter }: { isCenter: boolean }) => isCenter && `border-radius: 20px;  padding: 20px;`};
  position: absolute;
  bottom: ${({ isCenter }: { isCenter: boolean }) => !isCenter && 0};
  display: flex;
  flex-direction: column;
  align-items: baseline;
  max-width: ${({ theme }) => theme.MAX_WIDTH.DEFAULT};
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  @media screen and (max-width: ${({ theme }) => theme.MAX_WIDTH.MOBILE}) {
    padding: 30px;
    padding-bottom: 70px;
    ${({ isCenter }: { isCenter: boolean }) => isCenter && `padding: 20px;`};
  }

  animation: moveUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;

  @keyframes moveUp {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
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
