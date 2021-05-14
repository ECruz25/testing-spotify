import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Table from "../../components/Table";
import { selectSongs } from "./dashboardSlice";
import { useSelector } from "react-redux";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "80%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SearchModal({ closeModal, open, data }) {
  const songs = useSelector(selectSongs);
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <div>
      <Modal open={open} onClose={closeModal}>
        <div style={modalStyle} className={classes.paper}>
          {data && data.data && data.data.tracks ? (
            <Table data={data.data.tracks.items} songs={songs} />
          ) : (
            <p>nothing to show</p>
          )}
        </div>
      </Modal>
    </div>
  );
}
