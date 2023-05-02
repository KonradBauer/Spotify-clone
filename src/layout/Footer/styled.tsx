import styled from "styled-components";

export const Player = styled.div`
  width: 100%;
  height: 65px;
  position: fixed;
  bottom: 0;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.mineShaft};
`;
