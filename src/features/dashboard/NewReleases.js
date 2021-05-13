import React from "react";
import { BrowseNew, AlbumTracks } from "react-spotify-api";
import Song from "../Song";

const NewReleases = () => {
  return (
    <div>
      <h2>New Releases</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 20,
          paddingLeft: 20,
          overflow: "auto",
          paddingBottom: 20,
        }}
      >
        <BrowseNew options={{ limit: 5 }}>
          {(albums, loading, error) => {
            return (
              albums &&
              albums.data &&
              albums.data.albums &&
              albums.data.albums.items.map((album) => (
                <AlbumTracks id={album.id}>
                  {(tracks) => {
                    return (
                      tracks &&
                      tracks.data &&
                      tracks.data.items &&
                      tracks.data.items.map((track) => (
                        <Song song={track} album={album} />
                      ))
                    );
                  }}
                </AlbumTracks>
              ))
            );
          }}
        </BrowseNew>
      </div>
    </div>
  );
};

export default NewReleases;
