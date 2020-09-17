import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
import StarRateIcon from "@material-ui/icons/StarRate";

const useStyles = makeStyles({
  root: {
    width: 385,
    height: 385,
    background: "#F1F3F5",
    borderRadius: 25,
  },
  media: {
    height: 130,
    width: 210,
  },
  imgContainer: {
    paddingTop: 60,
  },
  cardContent: {
    paddingTop: 36,
    paddingLeft: 24,
  },
  text: {
    marginBottom: "0.5em",
  },
  priceText: {
    color: "#4666F6",
  },
  starIcon: {
    color: "#4666F6",
  },
});

const ProductCard = (props) => {
  const { name, rating, price, productImg } = props;
  const classes = useStyles();
  const ratingStar = [...Array(rating)].map((el, index) => (
    <Grid item key={index}>
      <StarRateIcon className={classes.starIcon} />
    </Grid>
  ));

  return (
    <Card className={classes.root} elevation={0}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item className={classes.imgContainer}>
          <CardMedia
            className={classes.media}
            image={productImg}
            title="Product Image"
          />
        </Grid>
      </Grid>
      <CardContent className={classes.cardContent}>
        <Typography variant="h5" className={classes.text}>
          {name}
        </Typography>
        <Grid container className={classes.text}>
          {ratingStar}
        </Grid>
        <Typography gutterBottom variant="h5" className={classes.priceText}>
          Best Price: Rs. {price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
