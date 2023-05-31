import React from "react";
import { Header, Input, LeftSide, RightSide, RoundedImage, StyledMain } from "./styled";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { useDataLayerValue } from "../../core/DataLayer";

export const Main: React.FC = () => {
  const [{ user }] = useDataLayerValue();

  return (
    <StyledMain>
      <Header>
        <LeftSide>
          <SearchSharpIcon />
          <Input placeholder="Search for Artists, Songs, or Podcasts" type="text" />
        </LeftSide>
        <RightSide>
          <RoundedImage src={user?.images[0]?.url} alt={user?.display_name} />
          <span>{user?.display_name}</span>
        </RightSide>
      </Header>
    </StyledMain>
  );
};
