import React from "react";
import {
  Home,
  Library,
  Line,
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
        <Playlist>{"PLAYLISTS"}</Playlist>
        <Line />
      </List>
    </StyledAside>
  );
};
