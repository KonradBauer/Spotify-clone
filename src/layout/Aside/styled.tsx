import styled from "styled-components";
import {ReactComponent as Logo} from "../../common/images/logo.svg";

export const StyledAside = styled.div`
  display: grid;
  background-color: ${({theme}) => theme.color.black};
  grid-area: 1 / 1 / 6 / 2;
  align-items: flex-start;
`

export const StyledLogo = styled(Logo)`
  margin: 14px -10px;
  width: 75%;
  height: 60px;
  cursor: pointer;
`

export const Home = styled.div`
  width: 255px;
  height: 40px;
`

export const Search = styled.div`
  width: 255px;
  height: 40px;
`

export const Library = styled.div`
  width: 255px;
  height: 40px;
`