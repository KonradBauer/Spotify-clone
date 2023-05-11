import styled from "styled-components";

export const FooterLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 65px;
  position: fixed;
  bottom: 0;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.mineShaftDark};
`;
