import React, { useEffect } from "react";
import { GlobalContainer } from "./layout/GlobalContainer";
import { Aside } from "./layout/Aside";
import { Main } from "./layout/Main";
import { LoginForm } from "./layout/LoginForm";
import { getTokenFromUrl } from "./core/getAPI";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./core/DataLayer";
import { Footer } from "./layout/Footer/Footer";

const spotify = new SpotifyWebApi();

const App: React.FC = () => {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash: any = getTokenFromUrl();
    window.location.hash = "";
    const _token: string = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) =>
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      );
    }
  }, []);

  return token ? (
    <GlobalContainer>
      <Aside />
      <Main />
      <Footer />
    </GlobalContainer>
  ) : (
    <LoginForm />
  );
};

export default App;
