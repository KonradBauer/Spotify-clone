import {
  CenterContent,
  LeftContent,
  RightContent,
  StyledPlayCircleOutlineIcon,
  StyledRepeatIcon,
  StyledShuffleIcon,
  StyledSkipNextIcon,
  StyledSkipPreviousIcon,
} from "./styled";
import { Slider, Grid } from "@mui/material";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";

export const Player = () => {
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
        <>
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayIcon />
            </Grid>
            <Grid item>
              <VolumeDownIcon />
            </Grid>
            <Grid item xs>
              <Slider />
            </Grid>
          </Grid>
        </>
      </RightContent>
    </>
  );
};
