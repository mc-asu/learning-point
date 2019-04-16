import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Grid, Avatar, Typography } from "@material-ui/core";

const styles = theme => ({
  paper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.unit * 2,
    width: "auto",
    height: "100%",
    textAlign: "center",
    backgroundColor: "#00CED1"
  },
  avatar: {
    margin: 10,
    width: 150,
    height: 150,
    backgroundColor: "transparent"
  }
});

function CurrentDate(props) {
  const { classes } = props;
  const date = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return (
    <Paper className={classes.paper}>
      <div className={classes.center}>
        <Typography variant="h4">{monthNames[date.getMonth()]}</Typography>
        <Grid container justify="center" alignItems="center">
          <Avatar className={classes.avatar}>
            <Typography variant="h1">{date.getDate()} </Typography>
          </Avatar>
        </Grid>
      </div>
    </Paper>
  );
}

CurrentDate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CurrentDate);
