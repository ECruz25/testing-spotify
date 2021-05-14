import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { millisToMinutesAndSeconds } from "../../utils";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    marginTop: 500,
  },
  table: {
    minWidth: 450,
  },
}));

function BasicTable({ data }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Album</TableCell>
            <TableCell align="right">Duration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.album.name}</TableCell>
              <TableCell align="right">
                {millisToMinutesAndSeconds(row.duration_ms)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default function SearchModal({ closeModal, open, data }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {data && data.data && data.data.tracks ? (
          <BasicTable data={data.data.tracks.items} />
        ) : (
          <p>nothing to show</p>
        )}
      </Modal>
    </div>
  );
}
