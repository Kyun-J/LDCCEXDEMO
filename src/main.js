import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./store/actions";
import { makeStyles } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";
import { GlobalThemeProvider } from "./theme";


import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import NetworkCheckIcon from "@material-ui/icons/NetworkCheck";
import FeedbackIcon from "@material-ui/icons/Feedback";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import FolderIcon from "@material-ui/icons/Folder";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import {
  Home,
  Dialog,
  Network,
  Photo,
  Auth,
  Repository,
  Etc,
} from "./component";
import Left from "./left";

const styles = makeStyles((theme) => ({
  root: {
    backgroundColor: deepOrange["600"]
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: "60%",
    maxWidth: 500,
  },
}));

const menus = [
  "Home",
  "Dialogs",
  "Network",
  "Photo",
  "Auth",
  "Repository",
  "Etc",
];
const Icons = [
  <HomeIcon />,
  <FeedbackIcon />,
  <NetworkCheckIcon />,
  <PhotoLibraryIcon />,
  <VerifiedUserIcon />,
  <FolderIcon />,
  <MoreHorizIcon />,
];

function Contents(props) {
  const position = props.position;
  switch (position) {
    case 0:
      return <Home />;
    case 1:
      return <Dialog />;
    case 2:
      return <Network />;
    case 3:
      return <Photo />;
    case 4:
      return <Auth />;
    case 5:
      return <Repository />;
    case 6:
      return <Etc />;
    default:
      return <div />;
  }
}

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
    <GlobalThemeProvider>
      <AppBar position="static" className={classes.root}>
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
            {profile === 0 ? "Hybrid Demo" : menus[profile] + " Demo"}
          </Typography>
          <IconButton
            color="inherit"
            onClick={() => {
              setTimeout(() => {
                dispatch(actions.compoenentPosition(0));
              }, 300);
            }}
          >
            <HomeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={state["drawer"]}
        onClose={setDrawer(false)}
        classes={{
          paper: classes.list,
        }}
      >
        <Left />
        <List>
          {menus.map((text, index) => (
            <ListItem button key={text} onClick={changeState(index)}>
              <ListItemIcon>{Icons[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Contents position={profile} />
    </GlobalThemeProvider>
  );
}
