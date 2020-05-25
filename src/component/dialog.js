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
  {
    name: "Short Toast (Android Only)",
    fun: "ShortToast",
    args: ["짦은 토스트 메시지"],
  },
  {
    name: "Long Toast (Android Only)",
    fun: "LongToast",
    args: ["긴 토스트 메시지"],
  },
  {
    name: "Show Dialog",
    fun: "Dialog",
    args: [
      "testTitle",
      "testMessage",
      [
        ["확인", "basic"],
        ["취소", "cancel"],
        ["삭제", "destructive"],
      ],
      "alert",
      true,
    ],
  },
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
