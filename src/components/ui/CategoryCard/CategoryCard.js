import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    width: "380px",
    height: "200px",
    background: (props) => props.background,
    borderRadius: "20px",
  },
  grid: {
    height: "inherit",
  },
  textContainer: {
    paddingLeft: "2rem",
  },
  text: {
    color: "white",
  },
  imgContainer: {
    paddingBottom: "1.5rem",
    paddingRight: "1.5rem",
  },
  img: {
    width: "140px",
    height: "120px",
  },
});

const CategoryCard = (props) => {
  const { categoryText, categoryImg } = props;
  const classes = useStyles(props);

  return (
    <Paper className={classes.card} elevation={0}>
      <Grid
        container
        direction="column"
        justify="flex-end"
        className={classes.grid}
      >
        <Grid item container className={classes.textContainer}>
          <Typography className={classes.text}>{categoryText}</Typography>
        </Grid>
        <Grid item container justify="flex-end" alignItems="flex-end">
          <Grid item className={classes.imgContainer}>
            <img
              src={categoryImg}
              alt="electronics-img"
              className={classes.img}
            />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CategoryCard;
