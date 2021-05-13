import React from "react";
import { SpotifyApiContext } from "react-spotify-api";
import Cookies from "js-cookie";
import Login from "./features/Login/Login";
import Dashboard from "./features/dashboard/Dashboard";
import AppBar from "./features/AppBar";
import "./App.css";

function App() {
  const token = Cookies.get("spotifyAuthToken");
  return (
    <div className="App">
      {token ? (
        <SpotifyApiContext.Provider value={token}>
          <AppBar />
          <Dashboard />
        </SpotifyApiContext.Provider>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
