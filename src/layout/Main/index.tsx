import React from "react";
import { Header, Input, LeftSide, RightSide, StyledMain } from "./styled";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

export const Main = () => {
  return (
    <>
      <StyledMain>
        <Header>
          <LeftSide>
            <SearchSharpIcon />
            <Input placeholder="Search for Artists, Songs, or Podcasts" type="text"></Input>
          </LeftSide>
          <RightSide />
        </Header>
      </StyledMain>
    </>
  );
};
