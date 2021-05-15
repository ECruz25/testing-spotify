import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { BrowseNew, AlbumTracks } from "react-spotify-api";
import Song from "../../components/Song";
import { selectSongs } from "./dashboardSlice";
import Alert from "../../components/Alert";

const NewReleases = ({ addSong }) => {
  const songs = useSelector(selectSongs);
  return (
    <div className="noscroll">
      <h2>New Releases</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 20,
          paddingLeft: 20,
          overflow: "auto",
          paddingBottom: 20,
          marginRight: 0,
        }}
      >
        <BrowseNew options={{ limit: 5 }}>
          {(albums, loading, error) => {
            return (
              albums &&
              albums.data &&
              albums.data.albums &&
              albums.data.albums.items.map((album) => (
                <Fragment key={album.id}>
                  <AlbumTracks id={album.id}>
                    {(tracks) => {
                      return (
                        tracks &&
                        tracks.data &&
                        tracks.data.items &&
                        tracks.data.items.map((track) => (
                          <Song
                            song={track}
                            album={album}
                            addSong={addSong}
                            key={track.id}
                            songs={songs}
                          />
                        ))
                      );
                    }}
                  </AlbumTracks>
                  {albums.data.error && (
                    <Alert
                      isOpen
                      type="error"
                      message={albums.data.error.message}
                      key={1}
                    ></Alert>
                  )}
                </Fragment>
              ))
            );
          }}
        </BrowseNew>
      </div>
    </div>
  );
};

export default NewReleases;
