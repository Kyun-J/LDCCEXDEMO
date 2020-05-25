import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding: 10,
  },
  btn: {
    width: "90%",
    margin: 10,
    textTransform: 'none'
  },
}));

const btnColor = ["default", "primary", "secondary"];
const btnInfo = [
  { name: "Call Auth", fun: "BioAuthentication", args: [] },
  { name: "Get App Unique ID", fun: "UniqueAppID", args: [] },
  { name: "Get Access Logs", fun: "", args: [] },
  { name: "Root(JailBreak) Check", fun: "RootingCheck", args: [] },
  { name: "App Intergrity Check", fun: "IntergrityCheck", args: [] },
];

export default function RecipeReviewCard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {btnInfo.map((info, i) => (
        <Button
          key={i}
          variant="contained"
          color={btnColor[i % 3]}
          onClick={() => {
            $flex[info.fun].apply(null, info.args);
          }}
          size="large"
          className={classes.btn}
        >
          {info.name}
        </Button>
      ))}
    </div>
  );
}
