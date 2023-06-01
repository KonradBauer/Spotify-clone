import React from "react";
import {
  BigText,
  ContentImage,
  ContentInfo,
  Header,
  Input,
  LeftSide,
  MainBody,
  MainBodyContent,
  RightSide,
  RoundedImage,
  StyledMain,
} from "./styled";
import { useDataLayerValue } from "../../core/DataLayer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

export const Main: React.FC = () => {
  const [{ user }] = useDataLayerValue();

  return (
    <StyledMain>
      <Header>
        <LeftSide>
          <SearchSharpIcon />
          <Input placeholder="Search for Artists, Songs, or Podcasts" type="text" />
        </LeftSide>
        {user ? (
          <RightSide>
            <RoundedImage src={user.images[0].url} alt={user.display_name} />
            <span>{user.display_name}</span>
          </RightSide>
        ) : (
          <RightSide>
            <AccountCircleIcon />
          </RightSide>
        )}
      </Header>
      <MainBody>
        <MainBodyContent>
          <ContentImage
            src="https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/8Esa1p63zncDPbJah79lkUCTH2xHwam9J0s1GNJg_Jv3tlWevZ14EkFqz_wSNZTsBdRJrojLFoqguoTVbRa4gKoaKLOqLWw9AN75K60tQEU=/MTU6MzM6NzBUNjItNTAtMw=="
            alt=""
          />
          <ContentInfo>
            <h5>PLAYLIST</h5>
            <BigText>Discover Weekly</BigText>
            <p>Description...</p>
          </ContentInfo>
        </MainBodyContent>
      </MainBody>
    </StyledMain>
  );
};
