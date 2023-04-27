import React from "react";
import { Container, Line, LogInButton, StyledLogo } from "./styled";
import { loginUrl } from "../../core/getAPI";

export const LoginForm: React.FC = () => {
  const btnText: string = "zaloguj się";
  const uppercaseText: string = btnText.toUpperCase();

  return (
    <>
      <Container>
        <StyledLogo />
        <Line />
        <LogInButton href={loginUrl}>{uppercaseText}</LogInButton>
      </Container>
    </>
  );
};
