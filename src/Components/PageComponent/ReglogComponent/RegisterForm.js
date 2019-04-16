import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  root: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2
  },
  resetContainer: {
    padding: theme.spacing.unit * 3
  }
});

function getSteps() {
  return ["Sign Up", "Enter personal details", "Confirm details"];
}

function getStepContent(step, handleChange, values) {
  switch (step) {
    case 0:
      return (
        <Fragment>
          <TextField
            id="outlined-firstname-input"
            label="First Name"
            margin="normal"
            variant="outlined"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            id="outlined-lastname-input"
            label="Last Name"
            margin="normal"
            variant="outlined"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            id="outlined-email-input"
            label="Email"
            margin="normal"
            variant="outlined"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
          <br />
        </Fragment>
      );
    case 1:
      return (
        <Fragment>
          <TextField
            id="outlined-occupation-input"
            label="Occupation"
            margin="normal"
            variant="outlined"
            onChange={handleChange("occupation")}
            defaultValue={values.occupation}
          />
          <br />
          <TextField
            id="outlined-city-input"
            label="City"
            margin="normal"
            variant="outlined"
            onChange={handleChange("city")}
            defaultValue={values.city}
          />
          <br />
          <TextField
            id="outlined-bio-input"
            label="Bio"
            margin="normal"
            variant="outlined"
            onChange={handleChange("bio")}
            defaultValue={values.bio}
          />
          <br />
        </Fragment>
      );
    case 2:
      return (
        <Fragment>
          <TextField
            id="outlined-firstname-input"
            label="First Name"
            margin="normal"
            variant="outlined"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            id="outlined-lastname-input"
            label="Last Name"
            margin="normal"
            variant="outlined"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
          />
          <br />
          <TextField
            id="outlined-email-input"
            label="Email"
            margin="normal"
            variant="outlined"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
          <br />
          <TextField
            id="outlined-occupation-input"
            label="Occupation"
            margin="normal"
            variant="outlined"
            onChange={handleChange("occupation")}
            defaultValue={values.occupation}
          />
          <br />
          <TextField
            id="outlined-city-input"
            label="City"
            margin="normal"
            variant="outlined"
            onChange={handleChange("city")}
            defaultValue={values.city}
          />
          <br />
          <TextField
            id="outlined-bio-input"
            label="Bio"
            margin="normal"
            variant="outlined"
            onChange={handleChange("bio")}
            defaultValue={values.bio}
          />
          <br />
        </Fragment>
      );
    default:
      return "Unknown step";
  }
}

class VerticalLinearStepper extends Component {
  state = {
    activeStep: 0,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
      firstName: "",
      lastName: "",
      email: "",
      occupation: "",
      city: "",
      bio: ""
    });
  };

  //   Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const {
      activeStep,
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio
    } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Fragment>
                  {getStepContent(index, this.handleChange, values)}
                </Fragment>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? "Confirm" : "Next"}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(VerticalLinearStepper);
