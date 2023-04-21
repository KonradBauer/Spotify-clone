import styled from "styled-components";

export const StyledAside = styled.div`
  display: grid;
  background-color: ${({theme}) => theme.color.black};
  grid-area: 1 / 1 / 6 / 2;
`