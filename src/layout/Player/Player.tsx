import React, { useState } from "react";
import {
  CenterContent,
  LeftContent,
  RightContent,
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
  const [volume, setVolume] = useState(100);
  const [prevVolume, setPrevVolume] = useState(100);

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

  return (
    <>
      <LeftContent>
        <p>Album and song details</p>
      </LeftContent>
      <CenterContent>
        <StyledShuffleIcon />
        <StyledSkipPreviousIcon />
        <StyledPlayCircleOutlineIcon fontSize="large" />
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
