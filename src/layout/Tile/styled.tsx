import styled from "styled-components";

export const Box = styled.div`
  max-width: 20rem;
  max-height: 16rem;
  background: ${({ theme }) => theme.color.mineShaft};
  border-radius: 10px;
`;

export const h2 = styled.div`
  color: ${({ theme }) => theme.color.white};
  width: 100%;
`;
