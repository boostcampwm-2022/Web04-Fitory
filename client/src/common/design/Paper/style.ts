import styled from "styled-components";

const Wrapper = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  ${({ shadow, hover }: { shadow: number; hover: boolean }) =>
    `
    box-shadow: rgb(0 0 0 / ${shadow * 4}%) 2px 4px 12px;
    &:hover {
      box-shadow: rgb(0 0 0 / ${(shadow + +hover) * 4}%) 2px 4px 12px;
    };
  `};
`;

export default { Wrapper };
