import * as url from "url";

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

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
