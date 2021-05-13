import React from "react";
import { BrowseNew } from "react-spotify-api";

const NewReleases = () => {
  return (
    <BrowseNew options={{ limit: 5 }}>
      {(albums, loading, error) => {
        debugger;
        return (
          albums &&
          albums.data &&
          albums.data.albums.items.map((album) => (
            <h1 key={album.id}>{album.name}</h1>
          ))
        );
      }}
    </BrowseNew>
  );
};

export default NewReleases;
