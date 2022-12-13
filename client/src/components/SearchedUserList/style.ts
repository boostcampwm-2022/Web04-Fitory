import styled, { keyframes } from "styled-components";

const boxOpenAnimation = keyframes` 
  0% {
    opacity: 0;
    transform: translate3d(0, -10%, 0);
  } 
  to {
    opacity: 1;transform: translateZ(0);
  }
`;

export const UserProfile = styled.div`
  padding: 5px 0;
  height: 60px;
  margin-bottom: 10px;
  animation: ${boxOpenAnimation} 1s;
`;
