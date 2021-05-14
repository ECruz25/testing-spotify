import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { IconButton } from "@material-ui/core";
import { AddCircleOutline, DeleteForeverOutlined } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { addSong, removeSong } from "../features/dashboard/dashboardSlice";
import {
  checkIfSongAlreadyInList,
  millisToMinutesAndSeconds,
  songActionButton,
} from "../utils";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 450,
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
            <TableCell>Name</TableCell>
            <TableCell>Album</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id} hover>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.album.name}</TableCell>
              <TableCell>
                {millisToMinutesAndSeconds(row.duration_ms)}
              </TableCell>
              <TableCell>
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
