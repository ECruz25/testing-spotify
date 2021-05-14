import React, { useEffect, useState } from "react";
import { SpotifyApiContext, useSearch } from "react-spotify-api";
import { Search } from "react-spotify-api";

import Cookies from "js-cookie";
import Login from "./features/Login/Login";
import Dashboard from "./features/dashboard/Dashboard";
import AppBar from "./features/AppBar";
import SearchModal from "./features/dashboard/SearchModal";

import "./App.css";

function App() {
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const token = Cookies.get("spotifyAuthToken");

  const searchByKeyWord = (keyword) => {
    setSearchKeyWord(keyword);
    if (keyword) {
      setIsSearching(true);
    }
  };

  const cancelSearch = () => {
    setIsSearching(false);
  };

  return (
    <div className="App">
      {token ? (
        <SpotifyApiContext.Provider value={token}>
          <AppBar searchByKeyWord={searchByKeyWord} />
          {isSearching ? (
            <Search query={searchKeyWord} track options={{ limit: 5 }}>
              {(data) => (
                <SearchModal
                  closeModal={cancelSearch}
                  open={isSearching}
                  data={data}
                />
              )}
            </Search>
          ) : (
            <Dashboard />
          )}
        </SpotifyApiContext.Provider>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
