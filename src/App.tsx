import React, { useEffect, useState } from "react";
import { GlobalContainer } from "./layout/GlobalContainer";
import { Aside } from "./layout/Aside";
import { Main } from "./layout/Main";
import { LoginForm } from "./layout/LoginForm";
import { getTokenFromUrl } from "./core/getAPI";

const App: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const hash: any = getTokenFromUrl();
    window.location.hash = "";
    const _token: string = hash.access_token;

    if (_token) {
      setToken(_token);
    }
  }, []);

  return token ? (
    <GlobalContainer>
      <Aside />
      <Main />
    </GlobalContainer>
  ) : (
    <LoginForm />
  );
};

export default App;
