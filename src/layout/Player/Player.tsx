import { CenterContent, LeftContent, RightContent } from "./styled";

export const Player = () => {
  return (
    <>
      <LeftContent>
        <p>Album and song details</p>
      </LeftContent>
      <CenterContent>
        <p>Player</p>
      </CenterContent>
      <RightContent>
        <p>Volume controls</p>
      </RightContent>
    </>
  );
};
