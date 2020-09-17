import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: (props) =>
      props.selected
        ? "linear-gradient(180deg, #6984FF 0%, #224AFF 100%)"
        : "#93999E",
    color: (props) => (props.selected ? "white" : "black"),
    borderRadius: "10px",
    textTransform: "none",
    width: "16.5rem",
    height: "5rem",
  },
});

const LargeButton = (props) => {
  const { children } = props;
  const classes = useStyles(props);

  return (
    <Button variant="contained" className={classes.root}>
      {children}
    </Button>
  );
};

export default LargeButton;
