import React from "react";
import { Grid, makeStyles, Container, Typography } from "@material-ui/core";
import Messenger from '../Chats/Messenger';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}));

function Chats() {
  const classes = useStyles();

  return (
    <div>
    <Messenger />
    </div>
  );
}

export default Chats;