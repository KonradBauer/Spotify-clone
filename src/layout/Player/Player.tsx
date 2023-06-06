import React, { useState } from "react";
import {
  AlbumLogo,
  Artist,
  CenterContent,
  LeftContent,
  RightContent,
  SongInfo,
  SongTitle,
  StyledPauseCircleOutlineIcon,
  StyledPlayCircleOutlineIcon,
  StyledRepeatIcon,
  StyledShuffleIcon,
  StyledSkipNextIcon,
  StyledSkipPreviousIcon,
  StyledVolumeDownIcon,
  StyledVolumeOffIcon,
  StyledVolumeUpIcon,
} from "./styled";
import { Slider, Grid } from "@mui/material";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";

export const Player = () => {
  const [volume, setVolume] = useState<number>(100);
  const [prevVolume, setPrevVolume] = useState<number>(100);
  const [playStatus, setPlayStatus] = useState<boolean>(false);

  const handleVolumeChange = (event: any, newValue: any) => {
    setVolume(newValue);
  };

  const handleVolumeClick = () => {
    if (volume === 0) {
      setVolume(prevVolume);
    } else {
      setPrevVolume(volume);
      setVolume(0);
    }
  };

  const togglePlayStatus = () => {
    setPlayStatus(!playStatus);
  };

  return (
    <>
      <LeftContent>
        <AlbumLogo
          src="https://cdns-images.dzcdn.net/images/cover/b89c20012cccb051c8a4e04d98386f95/350x350.jpg"
          alt="Album Cover"
        />
        <SongInfo>
          <SongTitle>Yeah!</SongTitle>
          <Artist>Usher</Artist>
        </SongInfo>
      </LeftContent>
      <CenterContent>
        <StyledShuffleIcon />
        <StyledSkipPreviousIcon />
        <span onClick={togglePlayStatus}>
          {!playStatus ? (
            <StyledPlayCircleOutlineIcon fontSize="large" />
          ) : (
            <StyledPauseCircleOutlineIcon fontSize="large" />
          )}
        </span>
        <StyledSkipNextIcon />
        <StyledRepeatIcon />
      </CenterContent>
      <RightContent>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item onClick={handleVolumeClick}>
            {volume === 0 ? (
              <StyledVolumeOffIcon />
            ) : volume >= 50 ? (
              <StyledVolumeUpIcon />
            ) : (
              <StyledVolumeDownIcon />
            )}
          </Grid>
          <Grid item xs>
            <Slider value={volume} onChange={handleVolumeChange} />
          </Grid>
        </Grid>
      </RightContent>
    </>
  );
};
