export const authEndpoint: string = "https://accounts.spotify.com/authorize";

const redirectUri: string = "http://localhost:3000";

const clientId: string = "58532210466c4483b3051e54ad128125";

const scopes: string[] = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

interface InitialState {
  [key: string]: string;
}

export const getTokenFromUrl = (): InitialState => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial: InitialState, item: string) => {
      let parts: string[] = item.split("=");

      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl: string = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
