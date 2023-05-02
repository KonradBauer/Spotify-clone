import styled from "styled-components";
import { ReactComponent as Logo } from "../../common/images/logo.svg";
import { ReactComponent as House } from "../../common/images/home.svg";
import { ReactComponent as HomeActive } from "../../common/images/home-active.svg";
import { ReactComponent as Loupe } from "../../common/images/loupe.svg";
import { ReactComponent as LoupeActive } from "../../common/images/loupe-active.svg";
import { ReactComponent as Lib } from "../../common/images/lib.svg";
import { ReactComponent as LibActive } from "../../common/images/lib-active.svg";

export const StyledAside = styled.div`
  display: grid;
  background-color: ${({ theme }) => theme.color.black};
  grid-area: 1 / 1 / 6 / 2;
  align-items: flex-start;
`;
export const List = styled.ul`
  color: ${({ theme }) => theme.color.nobel};
  font-weight: bold;
  font-size: 14px;
  list-style-type: none;
  margin-bottom: 450px;
  display: flex;
  flex-direction: column;
  padding: 0 0 0 30px;
`;
export const StyledLogo = styled(Logo)`
  color: ${({ theme }) => theme.color.white};
  margin: 14px -10px;
  width: 75%;
  height: 60px;
  cursor: pointer;
`;
export const StyledHouse = styled(House)`
  margin-right: 15px;
`;
export const StyledLib = styled(Lib)`
  margin-right: 15px;
`;
export const StyledLoupe = styled(Loupe)`
  margin-right: 15px;
`;
export const Home = styled.span`
  display: flex;
  justify-content: flex-start;
  width: 255px;
  height: 40px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: ${({ theme }) => theme.color.white};
  }

  &:active {
    color: ${({ theme }) => theme.color.white};
    transform: scale(0.99);
  }
`;

export const Search = styled.span`
  display: flex;
  justify-content: flex-start;
  width: 255px;
  height: 40px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: ${({ theme }) => theme.color.white};
  }

  &:active {
    color: ${({ theme }) => theme.color.white};
    transform: scale(0.99);
  }
`;

export const Library = styled.span`
  display: flex;
  justify-content: flex-start;
  width: 255px;
  height: 40px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: ${({ theme }) => theme.color.white};
  }

  &:active {
    color: ${({ theme }) => theme.color.white};
    transform: scale(0.99);
  }
`;

export const Playlist = styled.span`
  font-size: large;
  margin-top: 20px;
  font-weight: normal;
`;
