import db from "./db";
import { checkIfSongAlreadyInList } from "./utils";

const getAllByUser = async (user) => {
  const response = await db.where("user", "==", user).limit(1).get();
  let songs = [];
  response.docs.forEach((s) => {
    const _songs = s.data().songs;
    songs = _songs;
  });
  return songs;
};

const addSong = async ({ user, song }) => {
  const songsByUser = await db.where("user", "==", user).limit(1).get();
  let songs = [];
  if (songsByUser.docs.length > 0) {
    songsByUser.docs.forEach((s) => {
      const _songs = s.data().songs;
      songs = _songs;
    });
    if (checkIfSongAlreadyInList(songs, song)) {
      return;
    }
    songs.push(song);
    const { id } = songsByUser.docs[0];
    await db.doc(id).update({ user, songs });
  } else {
    await db.add({ user, songs: [song] });
  }
};

const removeSong = async ({ user, song }) => {
  const songsByUser = await db.where("user", "==", user).limit(1).get();
  let songs = [];
  if (songsByUser.docs.length > 0) {
    const { id } = songsByUser.docs[0];
    console.log(songsByUser.docs);
    songsByUser.docs.forEach((s) => {
      const _songs = s.data().songs;
      songs = _songs;
    });
    const newSongs = songs.filter((s) => s.id !== song);
    await db.doc(id).update({ user, songs: newSongs });
  }
};

const SongService = {
  getAllByUser,
  addSong,
  removeSong,
};

export default SongService;
