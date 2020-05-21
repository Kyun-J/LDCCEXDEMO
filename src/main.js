import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import Home from "./component/home";
import Dialog from "./component/dialog";

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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      hidden={value !== index}
      {...other}
    >
      {children}
    </div>
  );
}

export default function MAIN() {
  const classes = styles();

  const [state, setState] = React.useState({
    drawer: false,
    tabPosition: 0,
  });

  const setDrawer = (open) => () => {
    setState({ ...state, ["drawer"]: open });
  };

  const changeState = (newValue) => () => {
    setState({ ...state, ["tabPosition"]: newValue, ["drawer"]: false });
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
            News
          </Typography>
          <Button color="inherit">Login</Button>
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
            {['Home', 'Dialogs'].map((text, index) => (
            <ListItem button key={text} onClick={changeState(index)}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
            ))}
        </List>
        </Drawer>
      </React.Fragment>
      <TabPanel value={state["tabPosition"]} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={state["tabPosition"]} index={1}>
        <Dialog />
      </TabPanel>
    </Box>
  );
}
