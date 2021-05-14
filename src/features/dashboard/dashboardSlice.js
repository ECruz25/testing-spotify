import { createSlice } from "@reduxjs/toolkit";
import SongService from "../../songs.service";
import { checkIfSongAlreadyInList } from "../../utils";

const initialState = {
  songs: [],
  user: "",
};

export const dashboardSlice = createSlice({
  name: "My Library",
  initialState,
  reducers: {
    addSong: (state, { payload }) => {
      if (checkIfSongAlreadyInList(state.songs, payload)) return;
      const song = {
        id: payload.id,
        name: payload.name,
        album: { name: payload.album.name, images: payload.album.images },
        duration_ms: payload.duration_ms,
      };
      state.songs.push(payload);
      SongService.addSong({
        song,
        user: state.user,
      });
    },
    removeSong: (state, { payload }) => {
      state.songs = state.songs.filter((song) => song.id !== payload);
      SongService.removeSong({ user: state.user, song: payload });
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setSongs: (state, { payload }) => {
      state.songs = payload;
    },
  },
});

export const {
  addSong,
  setUser,
  setSongs,
  removeSong,
} = dashboardSlice.actions;

export const selectSongs = (state) => state.myLibrary.songs;
export const selectUser = (state) => state.myLibrary.user;

export default dashboardSlice.reducer;
