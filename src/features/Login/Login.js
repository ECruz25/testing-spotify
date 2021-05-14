import React from "react";
import { SpotifyAuth, Scopes } from "react-spotify-auth";
import "react-spotify-auth/dist/index.css"; // if using the included styles

const Login = () => {
  const credentials = {
    client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    redirect: process.env.REACT_APP_REDIRECT,
  };
  debugger;
  return (
    <div style={{}}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <SpotifyAuth
          redirectUri={credentials.redirect}
          clientID={credentials.client_id}
          scopes={[Scopes.userReadPrivate, Scopes.userReadEmail]}
        />
      </div>
    </div>
  );
};

export default Login;
