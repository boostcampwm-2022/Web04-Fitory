import styled from "styled-components";

export const Wrapper = styled.div`
  top: 0;
  gap: 25px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: ${({ theme }) => theme.MAX_WIDTH.DEFAULT};
`;

export const Logo = styled.img`
  width: 150px;
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 6px solid ${({ theme }) => theme.COLORS.LIGHT_BLUE};
  border-top-color: transparent;
  animation: spinner 0.8s ease infinite;
  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
