import React from "react";
import { Header, Input, LeftSide, RightSide, RoundedImage, StyledMain } from "./styled";
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
    </StyledMain>
  );
};
