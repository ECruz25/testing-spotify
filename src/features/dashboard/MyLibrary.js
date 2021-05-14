import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSongs, selectUser, setSongs } from "./dashboardSlice";
import SongService from "../../songs.service";
import DataTable from "../../components/Table";

const MyLibrary = () => {
  const songs = useSelector(selectSongs);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const loadSongs = async () => {
    const response = await SongService.getAllByUser(user);
    dispatch(setSongs(response));
  };
  useEffect(() => {
    loadSongs();
  }, [user]);
  return <DataTable data={songs} isMyList songs={songs} />;
};

export default MyLibrary;
