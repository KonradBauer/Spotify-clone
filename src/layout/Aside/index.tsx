import React from "react";
import {
  Home,
  Library,
  Line,
  List,
  Playlist,
  PlaylistContent,
  Search,
  StyledAside,
  StyledHouse,
  StyledLib,
  StyledLogo,
  StyledLoupe,
} from "./styled";
import { useDataLayerValue } from "../../core/DataLayer";

interface Playlist {
  name: string;
}

export const Aside: React.FC = () => {
  const [{ playlists }, dispatch] = useDataLayerValue();

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
        {playlists?.items?.map((playlist: Playlist) => (
          <PlaylistContent title={playlist.name} />
        ))}
      </List>
    </StyledAside>
  );
};
