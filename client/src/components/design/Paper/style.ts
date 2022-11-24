import styled from "styled-components";

const Wrapper = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 20px;
  box-shadow: ${({ shadow }: { shadow: number }) => `rgb(0 0 0 / ${shadow * 4}%) 2px 4px 12px`};
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export default { Wrapper };
