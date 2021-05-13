import React from "react";
import { BrowseRecommendations, AlbumTracks } from "react-spotify-api";
import Song from "../Song";

const Featured = () => {
  return (
    <div>
      <h2>Recommended</h2>
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
        <BrowseRecommendations options={{ market: "HN" }}>
          {(tracks, loading, error) => {
            return (
              tracks &&
              tracks.data &&
              tracks.data.tracks.map((song) => (
                <Song song={song} album={song.album} />
              ))
            );
          }}
        </BrowseRecommendations>
      </div>
    </div>
  );
};

export default Featured;
