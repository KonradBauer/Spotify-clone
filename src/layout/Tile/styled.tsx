import styled from "styled-components";

export const Box = styled.div`
  display: grid;
  max-width: 20rem;
  max-height: 16rem;
  background: ${({ theme }) => theme.color.mineShaft};
  border-radius: 10px;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.mineShaftLighter};
  }
`;
