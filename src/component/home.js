import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import * as actions from "../store/actions"
import { useDispatch } from "react-redux";

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
  return (
    <div className={classes.root}>
      {['Dialogs', 'Network', 'Camera', 'Gallery', 'Auth', 'Location'].map((info, i) => (
        <Button
          variant="contained"
          color={btnColor[i % 3]}
          size="large"
          onMouseUp={() => {dispatch(actions.compoenentPosition(i + 1));}}
          className={classes.btn}
        >
          {info}
        </Button>
      ))}
    </div>
  );
}
