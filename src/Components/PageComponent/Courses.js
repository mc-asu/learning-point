import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    display: "grid",
    gap: "30px",
    gridTemplateColumns: "repeat(auto-fit, minmax(265px, 1fr))",
    gridAutoRows: "365px",
    gridAutoFlow: "row dense",
    lineHeight: "20px"
  },
  child: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    gridColumnStart: "auto",
    gridRowStart: "auto"
  },
  card: {
    position: "relative",
    backgroundColor: " #fff",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
    overflow: "hidden",
    transition: "box-shadow 0.5s ease-in-out",
    borderRadius: "10px",
    "&:hover": {
      boxShadow: "0 0 50px rgba(0, 0, 0, 0.7)",
      cursor: "pointer"
    },
    "&:hover $thumbnail": {
      height: "130px;"
    },
    "&:hover $image": {
      opacity: "0.6",
      transform: "scale(1.2)"
    },
    "&:hover $cardBody": {
      height: "300px;"
    },
    "&:hover $description": {
      opacity: 1,
      transform: "translateY(0px)"
    }
    // color: "inherit",
    // textDecoration: "none", card a
  },
  thumbnail: {
    height: "245px",
    width: "auto",
    overflow: "hidden",
    backgroundColor: "#000",
    transition: "height 0.7s"
  },
  image: {
    width: "400px",
    display: "block",
    opacity: 1,
    transform: "scale(1)",
    transition: " opacity .7s, transform 0.7s"
  },
  cardBody: {
    position: "relative",
    height: "185px",
    padding: "20px",
    transition: "height .7s"
  },
  description: {
    transform: "translateY(45px)",
    opacity: 0,
    transition: "opacity 0.5s, transform 0.5s, opacity 0.5s"
  },
  footer: {
    position: "absolute",
    bottom: "5px",
    left: "20px",
    right: "20px"
  }
};

const courses = [
  {
    url: require("./images/artem-sapegin-176819-unsplash.jpg"),
    title: "React",
    subtitle: "Learn React in no time!",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat.",
    course: 16
  },
  {
    url: require("./images/conor-luddy-515302-unsplash.jpg"),
    title: "Photography",
    subtitle: "101 Course for Beginners",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat.",
    course: 10
  },
  {
    url: require("./images/jeshoots-com-436787-unsplash.jpg"),
    title: "Camera",
    subtitle: "Problem with Math? No problem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat.",
    course: 26
  },
  {
    url: require("./images/joakim-nadell-683417-unsplash.jpg"),
    title: "Architecture",
    subtitle: "Architecture 101",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat.",
    course: 14
  }
];

function Courses(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      {courses.map(image => (
        <div className={classes.child}>
          <div className={classes.card}>
            <div className={classes.thumbnail}>
              <img className={classes.image} src={image.url} alt="" />
            </div>
            <div className={classes.cardBody}>
              <Typography className="title">{image.title}</Typography>
              <div className="subtitle">{image.subtitle}</div>
              <Typography className={classes.description}>
                {image.description}
              </Typography>
            </div>
            <div className={classes.footer}>
              <CardActions>
                <Typography size="small" color="primary">
                  {image.course} Courses
                </Typography>
                <Button size="small" color="primary">
                  Learn Now!
                </Button>
              </CardActions>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

Courses.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Courses);
