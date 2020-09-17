import React, { useState } from "react";
import LargeButton from "./LargeButton";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import ListAltIcon from "@material-ui/icons/ListAlt";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default {
  title: "Buttons/LargeButton",
  component: LargeButton,
};

export const ProductDetailButton = () => {
  const [selected, setSelected] = useState(true);
  return (
    <LargeButton selected={selected} onClick={() => setSelected(!selected)}>
      <Grid container direction="column">
        <Grid item>
          <ListAltIcon />
        </Grid>
        <Grid item>
          <Typography>Product Detail</Typography>
        </Grid>
      </Grid>
    </LargeButton>
  );
};

export const PricesButton = () => (
  <LargeButton>
    <Grid container direction="column">
      <Grid item>
        <LocalAtmIcon />
      </Grid>
      <Grid item>
        <Typography>Prices</Typography>
      </Grid>
    </Grid>
  </LargeButton>
);
