import React from "react";
import {
  Home,
  Library,
  List,
  Playlist,
  Search,
  StyledAside,
  StyledHouse,
  StyledLib,
  StyledLogo,
  StyledLoupe,
} from "./styled";

interface Text {
  text: string;
}

export const Aside: React.FC = () => {
  return (
    <StyledAside>
      <StyledLogo />
      <List>
        <Home>
          <StyledHouse />
          {"Home"}
        </Home>
        <Search>
          <StyledLoupe />
          {"Szukaj"}
        </Search>
        <Library>
          <StyledLib />
          {"Biblioteka"}
        </Library>
        <Playlist>{"Playlists"}</Playlist>
      </List>
    </StyledAside>
  );
};
