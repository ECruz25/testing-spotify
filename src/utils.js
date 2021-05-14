import { AddCircleOutline, DeleteForeverOutlined } from "@material-ui/icons";

export function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

export const shortenSongName = (name, length) =>
  name.length > length ? name.substring(0, length) + "..." : name;

export const checkIfSongAlreadyInList = (list, song) =>
  list.filter((s) => s.id === song.id).length > 0;

export const songActionButton = (songs, song) => {
  if (checkIfSongAlreadyInList(songs, song)) {
    return <DeleteForeverOutlined />;
  } else {
    return <AddCircleOutline />;
  }
};
