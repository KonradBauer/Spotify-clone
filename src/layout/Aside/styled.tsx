import styled from "styled-components";
import {ReactComponent as Logo} from "../../common/images/logo.svg";

export const StyledAside = styled.div`
  display: grid;
  background-color: ${({theme}) => theme.color.black};
  grid-area: 1 / 1 / 6 / 2;
`

export const StyledLogo = styled(Logo)`
  margin: 14px -30px;
  width: 85%;
  height: 60px;
`