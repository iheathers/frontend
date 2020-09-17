import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(180deg, #6984FF 0%, #224AFF 100%)",
    borderRadius: "10px",
    width: "12.5rem",
    textTransform: "none",
    height: "3.125rem",
  },
  buttonText: {
    fontSize: "22px",
  },
});

const GoToButton = (props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <Button variant="contained" color="primary" className={classes.root}>
      <Typography className={classes.buttonText}>{children}</Typography>
    </Button>
  );
};

export default GoToButton;
