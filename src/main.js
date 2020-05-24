import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./store/actions"
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box"
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import Drawer from "@material-ui/core/Drawer";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { Home, Dialog } from "./component";

const styles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const menus = ['Home', 'Dialogs', 'Network', 'Camera', 'Gallery', 'Auth', 'Location'];

export default function MAIN() {
  const classes = styles();
  
  const dispatch = useDispatch();
  const profile = useSelector((store) => store.current.position);

  const [state, setState] = React.useState({
    drawer: false,
  });

  const setDrawer = (open) => () => {
    setState({ ...state, ["drawer"]: open });
  };

  const changeState = (newValue) => () => {
    dispatch(actions.compoenentPosition(newValue));
    setState({ ...state, ["drawer"]: false });
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={setDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            { profile===0?'HYBRID DEMO':menus[profile]+' Demo' }
          </Typography>
          <IconButton color="inherit" onClick={() => {setTimeout(() => {dispatch(actions.compoenentPosition(0));}, 300);}}>
            <HomeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <React.Fragment key="left">
        <Drawer
          anchor="left"
          open={state["drawer"]}
          onClose={setDrawer(false)}
        >
          <div role="presentation" className={classes.list}></div>
          <List>
            {menus.map((text, index) => (
            <ListItem button key={text} onClick={changeState(index)}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
            ))}
          </List>
        </Drawer>
      </React.Fragment>
      <Home />
      <Dialog />
    </Box>
  );
}
