import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import * as actions from "../store/actions"
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding: 10
  },
  btn: {
    width: "90%",
    margin: 10,
  },
}));

const btnColor = ["default", "primary", "secondary"];

export default function RecipeReviewCard() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const profile = useSelector((store) => store.current.position);
  return (
    <div hidden={profile!=0} className={classes.root}>
      {['Dialogs', 'Network', 'Camera', 'Gallery', 'Auth', 'Location'].map((info, i) => (
        <Button
          key={i}
          variant="contained"
          color={btnColor[i % 3]}
          size="large"
          onClick={() => {setTimeout(() => {dispatch(actions.compoenentPosition(i + 1));}, 300);}}
          className={classes.btn}
        >
          {info}
        </Button>
      ))}
    </div>
  );
}
