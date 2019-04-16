import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
  message: {
    margin: "15px 0"
  },

  username: {
    fontSize: "11px",
    opacity: "0.9",
    marginBottom: "6px"
  },
  text: {
    display: "inline",
    padding: "4px 8px",
    borderRadius: "8px"
  }
});

function Message(props) {
  const { classes } = props;

  return (
    /* TODO: add user picture*/
    <div className={classes.message}>
      <div className={classes.username}>{props.username}</div>
      <div className={classes.text}>{props.text}</div>
    </div>
  );
}

Message.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Message);
