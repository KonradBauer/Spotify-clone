import { CenterContent, LeftContent, RightContent } from "./styled";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";

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
        <p>Volume controls</p>
      </RightContent>
    </>
  );
};
