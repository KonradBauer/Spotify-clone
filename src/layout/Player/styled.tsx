import styled from "styled-components";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";

export const LeftContent = styled.div`
  display: flex;
  color: ${({ theme }) => theme.color.white};
  align-items: center;
  width: 300px;
`;

export const CenterContent = styled.div`
  display: flex;
  color: ${({ theme }) => theme.color.nobel};
  align-items: center;
  justify-content: space-between;
  width: 300px;
  padding: 0 20px;
`;

export const RightContent = styled.div`
  display: flex;
  color: ${({ theme }) => theme.color.nobel};
  align-items: center;
  width: 200px;
`;

export const AlbumLogo = styled.img`
  height: 60px;
  width: 60px;
  margin-right: 20px;
  object-fit: cover;
`;

export const SongInfo = styled.div`
  font-size: 10px;
`;

export const SongTitle = styled.div`
  font-size: 0.875rem;
  font-weight: bold;
`;

export const Artist = styled.div`
  font-size: 0.6875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color.nobel};

  &:hover {
    color: ${({ theme }) => theme.color.white};
  }
`;

export const StyledPlayCircleOutlineIcon = styled(PlayCircleOutlineIcon)`
  &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.2);
    cursor: pointer;
    color: ${({ theme }) => theme.color.white};
  }

  &:active {
    transform: scale(0.99);
  }
`;

export const StyledShuffleIcon = styled(ShuffleIcon)`
  &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.2);
    cursor: pointer;
    color: ${({ theme }) => theme.color.white};
  }

  &:active {
    transform: scale(0.99);
  }
`;

export const StyledRepeatIcon = styled(RepeatIcon)`
  &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.2);
    cursor: pointer;
    color: ${({ theme }) => theme.color.white};
  }

  &:active {
    transform: scale(0.99);
  }
`;

export const StyledSkipPreviousIcon = styled(SkipPreviousIcon)`
  &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.2);
    cursor: pointer;
    color: ${({ theme }) => theme.color.white};
  }

  &:active {
    transform: scale(0.99);
  }
`;

export const StyledSkipNextIcon = styled(SkipNextIcon)`
  &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.2);
    cursor: pointer;
    color: ${({ theme }) => theme.color.white};
  }

  &:active {
    transform: scale(0.99);
  }
`;

export const StyledVolumeOffIcon = styled(VolumeOffIcon)`
  &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.2);
    cursor: pointer;
    color: ${({ theme }) => theme.color.white};
  }

  &:active {
    transform: scale(0.99);
  }
`;

export const StyledVolumeUpIcon = styled(VolumeUpIcon)`
  &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.2);
    cursor: pointer;
    color: ${({ theme }) => theme.color.white};
  }

  &:active {
    transform: scale(0.99);
  }
`;

export const StyledVolumeDownIcon = styled(VolumeDownIcon)`
  &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.2);
    cursor: pointer;
    color: ${({ theme }) => theme.color.white};
  }

  &:active {
    transform: scale(0.99);
  }
`;

export const StyledPauseCircleOutlineIcon = styled(PauseCircleOutlineIcon)`
  &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.2);
    cursor: pointer;
    color: ${({ theme }) => theme.color.white};
  }

  &:active {
    transform: scale(0.99);
  }
`;
