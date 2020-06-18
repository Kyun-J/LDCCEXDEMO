import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
    color: "white",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  expandCont: {
    marginLeft: "auto",
    paddingRight: 0,
  },
  expandT: {
    '&:last-child': {
      padding: 12,
      textAlign: 'right'
    }
  },
  card: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 0,
  },
  avatar: {
    backgroundColor: theme.overrides.MuiButton.contained.backgroundColor
  },
  action: {
    padding: 0,
    height: 32,
  },
  white: {
    color: "white",
    whiteSpace: 'pre'
  },
}));

export default function Left() {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const toggleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        classes={{ title: classes.white }}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            H
          </Avatar>
        }
        titleTypographyProps={{ variant: "h6" }}
        title="Hybrid Demo"
      />
      <CardActions
        classes={{
          root: classes.action,
        }}
        disableSpacing
      >
        <CardContent className={classes.expandCont}>
          <Typography variant="caption" component="p" className={classes.white}>
            Made By
          </Typography>
        </CardContent>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={toggleExpandClick}
          aria-expanded={expanded}
          aria-label="Made By"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent classes={{root: classes.expandT}}>
          <Typography variant="caption" component="p" className={classes.white}>Kyun-J</Typography>
          <Typography variant="caption" component="p" className={classes.white}>YunByungKwan</Typography>
          <Typography variant="caption" component="p" className={classes.white}>Ayeonii</Typography>
          <Typography variant="caption" component="p" className={classes.white}>201402407</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
