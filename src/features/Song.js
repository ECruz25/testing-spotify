import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import { IconButton } from "@material-ui/core";
import { AddCircleOutline } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    width: 150,
    height: 300,
    marginRight: 40,
    fontSize: 12,
  },
  media: {
    height: 140,
  },
  albumName: {
    fontWeight: "bold",
  },
});

const Song = ({ song, album }) => {
  const classes = useStyles();

  const shortenSongName = (name, length) =>
    name.length > length ? name.substring(0, length) + "..." : name;

  return (
    <div key={song.id}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={album.images && album.images[0].url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <div style={{ height: 40 }}>
            <Tooltip title={song.name}>
              <Typography variant="p" component="p">
                {shortenSongName(song.name, 35)}
              </Typography>
            </Tooltip>
          </div>
          <Typography variant="p" component="p" className={classes.albumName}>
            {album.name}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="share">
            <AddCircleOutline />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Song;
