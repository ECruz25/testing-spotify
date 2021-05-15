import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Avatar, IconButton } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addSong, removeSong } from "../features/dashboard/dashboardSlice";
import {
  checkIfSongAlreadyInList,
  millisToMinutesAndSeconds,
  songActionButton,
} from "../utils";

const useStyles = makeStyles((theme) => ({
  table: {
    width: "100%",
    maxHeight: 500,
  },
}));

function DataTable({ data, songs }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const songAction = (row) => {
    if (checkIfSongAlreadyInList(songs, row)) {
      dispatch(removeSong(row.id));
    } else {
      dispatch(addSong(row));
    }
  };
  return (
    <TableContainer className={classes.table}>
      <Table size="small" aria-label="a dense table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell style={{ width: 60 }}>🎵</TableCell>
            <TableCell style={{ width: "50%" }}>Name</TableCell>
            <TableCell style={{ width: "50%" }}>Album</TableCell>
            <TableCell style={{ width: 50 }}>Duration</TableCell>
            <TableCell style={{ width: 50 }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow hover key={row.id}>
              <TableCell style={{ width: 60 }}>
                <Avatar alt={row.album.name} src={row.album.images[0].url} />
              </TableCell>
              <TableCell style={{ width: "50%" }}>{row.name}</TableCell>
              <TableCell style={{ width: "50%" }}>{row.album.name}</TableCell>
              <TableCell style={{ width: 50 }}>
                {millisToMinutesAndSeconds(row.duration_ms)}
              </TableCell>
              <TableCell style={{ width: 50 }}>
                <IconButton aria-label="share" onClick={() => songAction(row)}>
                  {songActionButton(songs, row)}
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;
