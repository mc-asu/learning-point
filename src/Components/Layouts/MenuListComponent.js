import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Grid,
  Avatar,
  Divider,
  Typography
} from "@material-ui/core";

import DashboardIcon from "@material-ui/icons/Dashboard";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SettingsIcon from "@material-ui/icons/Settings";
import SchoolIcon from "@material-ui/icons/School";
import GradeIcon from "@material-ui/icons/Grade";
import ViewQuilt from "@material-ui/icons/ViewQuilt";

const styles = theme => ({
  menuItem: {
    color: "primary",
    padding: 24
  },
  padding: {
    paddingBottom: 24
  },
  avatar: {
    margin: 10,
    width: 125,
    height: 125
  },
  toolbar: {
    ...theme.mixins.toolbar
  }
});

function MenuListComponent(props) {
  const { classes } = props;
  return (
    <Fragment>
      <MenuList className={classes.menuList}>
        <Grid container justify="center" alignItems="center">
          <Avatar
            alt="profile picture"
            src={require("./../PageComponent/images/alessio-lin-210830-unsplash.jpg")}
            className={classes.avatar}
          />
          <Typography variant="h6" color="inherit" noWrap>
            Manuel Casupanan
          </Typography>
          <Typography
            variant="caption"
            color="inherit"
            noWrap
            className={classes.padding}
          >
            @treebornfrog
          </Typography>
        </Grid>
        <Divider />
        <MenuItem className={classes.menuItem} component={Link} to="/">
          <ListItemIcon className={classes.icon}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.primary }}
            inset
            primary="Home"
          />
        </MenuItem>
        <MenuItem
          className={classes.menuItem}
          component={Link}
          to="/curriculum"
        >
          <ListItemIcon className={classes.icon}>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.primary }}
            inset
            primary="Curriculum"
          />
        </MenuItem>
        <MenuItem className={classes.menuItem} component={Link} to="/kanban">
          <ListItemIcon className={classes.icon}>
            <ViewQuilt />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.primary }}
            inset
            primary="Kanban"
          />
        </MenuItem>
        <MenuItem className={classes.menuItem} component={Link} to="/404">
          <ListItemIcon className={classes.icon}>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.primary }}
            inset
            primary="News"
          />
        </MenuItem>
        <MenuItem className={classes.menuItem} component={Link} to="/chatroom">
          <ListItemIcon className={classes.icon}>
            <ChatBubbleIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.primary }}
            inset
            primary="Chatroom"
          />
        </MenuItem>
        <MenuItem className={classes.menuItem} component={Link} to="/404">
          <ListItemIcon className={classes.icon}>
            <GradeIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.primary }}
            inset
            primary="Certificates"
          />
        </MenuItem>
        <MenuItem className={classes.menuItem} component={Link} to="/404">
          <ListItemIcon className={classes.icon}>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.primary }}
            inset
            primary="Settings"
          />
        </MenuItem>
      </MenuList>
    </Fragment>
  );
}

MenuListComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuListComponent);
