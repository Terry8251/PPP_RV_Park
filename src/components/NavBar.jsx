import React from "react";
import { Button, Grid, makeStyles, Paper } from "@material-ui/core";
import parkLogo from "../images/RV_park_logo_1.png";

const useStyles = makeStyles({
  navButton: {
    color: "black",
    width: 97,
    height: 40,
    top: 40,
  },
  rvLogo: {
    width: 149,
    height: 113,
    left: 110,
    position: "relative",
    top: 5,
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: "bold",
    height: 40,
    right: 240,
    top: 40,
  },
});

function NavBar() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        lg={6}
        xl={6}
        style={{ position: "relative" }}
      >
        <Grid
          direction="row"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <img src={parkLogo} alt="park logo" className={classes.rvLogo} />
          <Button className={classes.mainTitle}>Peculiar Park Place</Button>
        </Grid>
      </Grid>
      <Grid
        item
        direction="row"
        style={{ display: "flex", justifyContent: "space-evenly" }}
        xs={12}
        sm={6}
        md={6}
        lg={6}
      >
        <Button className={classes.navButtons}>About</Button>
        <Button className={classes.navButtons}>Policies</Button>
        <Button className={classes.navButtons}>Local</Button>
        <Button className={classes.navButtons}>Food</Button>
        <Button className={classes.navButtons}>Contact</Button>
      </Grid>
    </Grid>
  );
}

export default NavBar;
