import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { TodoListComponent, CurrentDate, SimpleCard } from "./HomeComponent";

const styles = theme => ({
  gridContainer: {
    display: "grid",
    gap: "30px",
    gridTemplateColumns: "repeat(auto-fit, minmax(265px, 1fr))",
    gridAutoRows: "150px",
    gridAutoFLow: "row dense",
    lineHeight: "20px"
  },
  child: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    gridColumnStart: "auto",
    gridRowStart: "auto",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)"
    }
  },
  // size of items in row
  small: {
    gridRowEnd: "span 1"
  },
  medium: {
    gridRowEnd: "span 2"
  },
  large: {
    gridRowEnd: "span 3"
  },
  full: {
    gridRowEnd: "span auto"
  },
  // scroll for to do list
  scroll: {
    overflow: "auto"
  }
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className={classes.gridContainer}>
          <div className={classNames(classes.child, classes.medium)}>
            <CurrentDate />
          </div>

          <div className={classNames(classes.child, classes.small)}>
            <SimpleCard />
            {/* SimpleCard ist eine Karte von MaterialUI, 
            ich habe diese nicht programmiert, sie dient lediglich
            dazu da, damit die Hauptseite vorerst gefüllt ist */}
          </div>

          <div
            className={classNames(classes.child, classes.large, classes.scroll)}
          >
            <TodoListComponent />
          </div>
        </div>
      </Fragment>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
