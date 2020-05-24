import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";


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
const btnInfo = [
  { name: "Short Toast (Android Only)", fun: "connectFuncShowShortToast", args: "짦은 토스트 메시지" },
  { name: "Long Toast (Android Only)", fun: "connectFuncShowLongToast", args: "긴 토스트 메시지" },
];

export default function RecipeReviewCard() {
  const classes = useStyles();
  const profile = useSelector((store) => store.current.position);

  return (
    <div hidden={profile!=1} className={classes.root}>
      {btnInfo.map((info, i) => (
        <Button
          key={i}
          variant="contained"
          color={btnColor[i % 3]}
          onClick={() => {
            $flex[info.fun](info.args);
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
