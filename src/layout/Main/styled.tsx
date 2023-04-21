import styled from "styled-components";

export const StyledMain = styled.div`
  display: grid;
  background: ${({theme}) => theme.color.codGray};
  grid-area: 1 / 2 / 6 / 6;
`