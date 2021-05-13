import React from "react";
import { SpotifyAuth, Scopes } from "react-spotify-auth";
import "react-spotify-auth/dist/index.css"; // if using the included styles

const Login = () => {
  const credentials = {
    client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
  };
  return (
    <SpotifyAuth
      redirectUri="http://localhost:3000/callback"
      clientID={credentials.client_id}
      scopes={[Scopes.userReadPrivate, Scopes.userReadEmail]}
    />
  );
};

export default Login;
