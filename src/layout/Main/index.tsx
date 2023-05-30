import React from "react";
import { Header, Input, LeftSide, RightSide, StyledMain } from "./styled";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDataLayerValue } from "../../core/DataLayer";

export const Main = () => {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <StyledMain>
      <Header>
        <LeftSide>
          <SearchSharpIcon />
          <Input placeholder="Search for Artists, Songs, or Podcasts" type="text" />
        </LeftSide>
        <RightSide>
          <AccountCircleIcon src={user?.images[0]?.url} alt="User name" />
          <span>Sakiro</span>
        </RightSide>
      </Header>
    </StyledMain>
  );
};
