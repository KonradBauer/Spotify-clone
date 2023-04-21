import styled from "styled-components";


interface ContainerProps {
    background?: string;
}

export const GlobalContainerStyles = styled.div<ContainerProps>`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background: black;
`