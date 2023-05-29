import styled from "styled-components";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";

export const LeftContent = styled.div`
  display: flex;
`;

export const CenterContent = styled.div`
  display: flex;
  color: ${({ theme }) => theme.color.white};
  align-items: center;
  justify-content: space-between;
  width: 300px;
  padding: 0 20px;
`;

export const RightContent = styled.div`
  display: flex;
  color: ${({ theme }) => theme.color.white};
  align-items: center;
  width: 200px;
`;

export const StyledPlayCircleOutlineIcon = styled(PlayCircleOutlineIcon)`
  &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.2);
  }
`;

export const StyledShuffleIcon = styled(ShuffleIcon)`
  &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.2);
  }
`;

export const StyledRepeatIcon = styled(RepeatIcon)`
  &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.2);
  }
`;

export const StyledSkipPreviousIcon = styled(SkipPreviousIcon)`
  &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.2);
  }
`;

export const StyledSkipNextIcon = styled(SkipNextIcon)`
  &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.2);
  }
`;
