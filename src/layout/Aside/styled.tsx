import styled from "styled-components";
import {ReactComponent as Logo} from "../../common/images/logo.svg";

export const StyledAside = styled.div`
  display: grid;
  background-color: ${({theme}) => theme.color.black};
  grid-area: 1 / 1 / 6 / 2;
`

export const StyledLogo = styled(Logo)`
  margin: 14px 6px;
  width: 170px;
  height: 60px;
`