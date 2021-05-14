import React, { useState } from "react";
import { SpotifyApiContext } from "react-spotify-api";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, CssBaseline } from "@material-ui/core";
import { Search } from "react-spotify-api";
import Cookies from "js-cookie";
import Login from "./features/Login/Login";
import Dashboard from "./features/dashboard/Dashboard";
import SearchModal from "./features/dashboard/SearchModal";
import AppBar from "./components/AppBar";

import "./App.css";
import RedirectC from "./components/Redirect";
import Alert from "./components/Alert";

const theme = createMuiTheme({
  spacing: 4,
  palette: {
    type: "dark",
    primary: {
      main: "#1DB954",
    },
  },
  darkMode: true,
});

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

  const logout = () => {
    Cookies.remove("spotifyAuthToken");
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
        <Router>
          {token ? (
            <SpotifyApiContext.Provider value={token}>
              <AppBar searchByKeyWord={searchByKeyWord} />
              {isSearching && (
                <Search query={searchKeyWord} track options={{ limit: 10 }}>
                  {(data) =>
                    data && (
                      <SearchModal
                        closeModal={cancelSearch}
                        open={isSearching}
                        data={data}
                      />
                    )
                  }
                </Search>
              )}
              <Switch>
                <Route path="/" exact>
                  <Dashboard />
                </Route>
                <Route path="/callback" exact>
                  <RedirectC />
                </Route>
              </Switch>
            </SpotifyApiContext.Provider>
          ) : (
            <Login />
          )}
        </Router>
        <Alert severity="error">This is an error message!</Alert>
      </div>
    </ThemeProvider>
  );
}

export default App;
