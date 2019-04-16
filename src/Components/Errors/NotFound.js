import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import pattern from "./pattern.png";
import styled, { keyframes } from "styled-components";
import classNames from "classnames";

const move = keyframes`
    0% { transform:rotate(0deg) }
    100% { transform: rotate(360deg) }
`;

const NotFoundWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (min-width: 768px) {
    transform: translate(0, -50%);
  }
`;

const Ring = styled.div`
  height: 140px;
  width: 50px;
  border-top: 4px solid #000;
  border-right: 4px solid #000;
  border-bottom: 4px solid #000;
  border-left: 1px solid transparent;

  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateZ(45deg);
`;

const Circle = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background: radial-gradient(circle, #ffbf00, #fd6a02);
  boxshadow: 0 0 15px rgba(255, 211, 150, 1);
  position: relative;
  top: 10px;
  animation: ${move} 4s linear infinite;
  @media (min-width: 768px) {
    transform: translate(-10%, -50%);
  }
`;

const styles = {
  root: {
    // Buggy as its displayed inside the layout, not applying it to the outer div
    margin: 0,
    padding: 0,
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    background: `url(${pattern}), radial-gradient(circle,#f9a602 0%,#c21807 20%,#5e1914 35%, transparent 80% )`
  },
  msg: {
    fontFamily: "monospace",
    fontSize: "25px",
    color: "#000",
    textAlign: "center",
    textShadow: "0 0 10px rgba(255,255,255,0.8)"
  },
  error: {
    display: "table",
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)"
  },
  f1: {
    fontFamily: "cursive",
    fontSize: "100px",
    color: "#000",
    textShadow: "0 0 10px rgba(0,0,0,0.7)",
    display: "table-cell"
  },
  f2: {
    fontFamily: "cursive",
    fontSize: "100px",
    color: "#000",
    textShadow: "0 0 10px rgba(0,0,0,0.7)",
    display: "table-cell"
  },
  smalldot: {
    height: "5px",
    width: "5px",
    backgroundColor: "#111742",
    borderRadius: "50%",
    position: "relative",
    top: "75%",
    left: "65%",
    transform: "translate(-50%,-50%)"
  },
  info: {
    fontFamily: "monospace",
    fontSize: "13px",
    color: "#000",
    textAlign: "center",
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    textShadow: "0 0 10px rgba(0,0,0,0.8)"
  },
  button: {
    height: "30px",
    width: "120px",
    color: "white",
    backgroundColor: "#E94674",
    fontFamily: "monospace",
    fontSize: "13px",
    textAlign: "center",
    lineHeight: "30px",
    borderRadius: "15px",
    position: "relative",
    marginTop: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    boxShadow: "0 0 10px rgba(233,68,114,.8)",
    "&:hover": { cursor: "pointer" }
  },

  dusk: {
    height: "5px",
    width: "5px",
    backgroundColor: "white",
    boxShadow: "0 0 20px rgba(0,0,0,0.5)",
    borderRadius: "50%",
    position: "absolute"
  },
  d1: {
    top: "33%",
    left: "35%",
    WebkitFilter: "blur(3px)"
  },
  d2: {
    top: "53%",
    left: "55%",
    WebkitFilter: "blur(1px)"
  },
  d3: {
    top: "53%",
    left: "75%",
    WebkitFilter: "blur(4px)"
  },
  d4: {
    top: "53%",
    left: "40%",
    WebkitFilter: "blur(1px)"
  },
  d5: {
    top: "65%",
    left: "37%",
    WebkitFilter: "blur(2px)"
  },
  d6: {
    top: "70%",
    left: "30%",
    WebkitFilter: "blur(4px)"
  },
  d7: {
    top: "77%",
    left: "53%",
    WebkitFilter: "blur(2px)"
  },
  d8: {
    top: "59%",
    left: "64%",
    WebkitFilter: "blur(2px)"
  },
  d9: {
    top: "44%",
    left: "61%",
    WebkitFilter: "blur(1px)"
  }
};

function NotFound(props) {
  const { classes } = props;
  return (
    <div>
      <NotFoundWrapper>
        <div className={classes.msg}>Page not found</div>
        <div className={classes.error}>
          <div className={classes.f1}>4</div>
          <Circle>
            <div className={classes.smalldot} />
          </Circle>
          <Ring />
          <div className={classes.f2}>4</div>
        </div>
        <div className={classes.info}>
          We can't seem to find the page <br /> you're looking for.
        </div>
        <div className={classes.button}>Back to site</div>
      </NotFoundWrapper>

      <div className={classNames(classes.dusk, classes.d1)} />
      <div className={classNames(classes.dusk, classes.d2)} />
      <div className={classNames(classes.dusk, classes.d3)} />
      <div className={classNames(classes.dusk, classes.d4)} />
      <div className={classNames(classes.dusk, classes.d5)} />
      <div className={classNames(classes.dusk, classes.d6)} />
      <div className={classNames(classes.dusk, classes.d7)} />
      <div className={classNames(classes.dusk, classes.d8)} />
      <div className={classNames(classes.dusk, classes.d9)} />
    </div>
  );
}

NotFound.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NotFound);
