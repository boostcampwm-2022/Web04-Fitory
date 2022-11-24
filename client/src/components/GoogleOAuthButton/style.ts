import styled from "styled-components";

export const Button = styled.button`
  width: 200px;
  &:hover {
    filter: opacity(0.9);
  }
  & > img {
    width: 100%;
  }
`;
