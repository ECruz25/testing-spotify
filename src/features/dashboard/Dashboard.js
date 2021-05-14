import { Container, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useUser } from "react-spotify-api";
import MyLibrary from "./MyLibrary";
import { setUser } from "./dashboardSlice";
import NewReleases from "./NewReleases";

const useStyles = makeStyles({
  root: { padding: 5, margin: 5, maxWidth: "97.5%" },
});

const Dashboard = () => {
  const user = useUser();
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (user && user.data) {
      dispatch(setUser(user.data.id));
    }
  }, [dispatch, user]);

  return (
    <React.Fragment>
      <Container className={classes.root}>
        <NewReleases />
        <MyLibrary />
      </Container>
    </React.Fragment>
  );
};

export default Dashboard;
