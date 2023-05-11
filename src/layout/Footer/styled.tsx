import styled from "styled-components";

export const FooterLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 65px;
  position: fixed;
  bottom: 0;
  padding: 40px;
  background-color: ${({ theme }) => theme.color.mineShaftDark};
`;
