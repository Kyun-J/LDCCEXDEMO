import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import * as actions from "../store/actions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding: 10,
  },
  btn: {
    width: "85%",
    margin: 20,
    padding: 10
  },
}));

const btncolor = ["primary", "default"];

export default function RecipeReviewCard() {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <div className={classes.root}>
      {["Dialogs", "Network", "Photo", "Auth", "Repository", "Social Login" , "Etc"].map(
        (info, i) => (
          <Button
            key={i}
            variant="contained"
            color={i < 3 ? btncolor[0]:btncolor[1]}
            size="large"
            onClick={() => {
              setTimeout(() => {
                dispatch(actions.compoenentPosition(i + 1));
              }, 300);
            }}
            className={classes.btn}
          >
            {info}
          </Button>
        )
      )}
    </div>
  );
}
