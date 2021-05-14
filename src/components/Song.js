import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import { IconButton } from "@material-ui/core";
import {
  checkIfSongAlreadyInList,
  shortenSongName,
  songActionButton,
} from "../utils";
import { useDispatch } from "react-redux";
import { addSong, removeSong } from "../features/dashboard/dashboardSlice";

const useStyles = makeStyles({
  root: {
    width: 150,
    height: 232,
    marginRight: 40,
    fontSize: 12,
  },
  media: {
    height: 140,
  },
  albumName: {
    fontWeight: "bold",
  },
  content: {
    padding: 5,
  },
  actions: {
    display: "block",
    padding: 0,
  },
  button: {
    padding: 3,
  },
});

const Song = ({ song, album, songs }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const songAction = (song) => {
    if (checkIfSongAlreadyInList(songs, song)) {
      dispatch(removeSong(song.id));
    } else {
      dispatch(addSong(song));
    }
  };

  return (
    <div key={song.id}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={album.images && album.images[0].url}
          title={album.name}
        />
        <CardContent className={classes.content}>
          <div style={{ height: 25, padding: 0 }}>
            <Tooltip title={song.name}>
              <Typography variant="caption" component="p">
                {shortenSongName(song.name, 20)}
              </Typography>
            </Tooltip>
          </div>
          <Tooltip title={album.name}>
            <Typography
              variant="caption"
              component="p"
              className={classes.albumName}
            >
              {shortenSongName(album.name, 15)}
            </Typography>
          </Tooltip>
        </CardContent>
        <CardActions className={classes.actions}>
          <IconButton
            aria-label="share"
            onClick={() => songAction({ ...song, album })}
            className={classes.button}
          >
            {songActionButton(songs, song)}
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Song;
