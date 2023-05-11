import React from "react";
import { FooterLayout } from "./styled";
import { Player } from "../Player/Player";

export const Footer: React.FC = () => {
  return (
    <FooterLayout>
      <Player />
    </FooterLayout>
  );
};
