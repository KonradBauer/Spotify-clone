import { CenterContent, LeftContent, RightContent } from "./styled";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
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
        <ShuffleIcon />
        <SkipPreviousIcon />
        <PlayCircleOutlineIcon fontSize="large" />
        <SkipNextIcon />
        <RepeatIcon />
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
