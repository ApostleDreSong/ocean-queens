import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center"
  }
}));

export default function FooterCredits() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
          <p className={classes.title}>
             Copyright &copy; {new Date().getFullYear()} Ocean Queens Marine Ltd. All rights reserved.
          </p>
      </AppBar>
    </div>
  );
}
