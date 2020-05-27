import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
    padding: 10,
  },
  btn: {
    width: "60%",
    margin: 10,
    textTransform: "none",
  },
  card: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#f5fafa",
  },
  field: {
    margin: 10,
    width: "40%",
    minWidth: 200
  },
}));

const btnColor = ["default", "primary", "secondary"];
const btnInfo = [
  {
    name: "Short Toast (Android Only)",
    fun: "ShortToast",
  },
  {
    name: "Long Toast (Android Only)",
    fun: "LongToast",
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

  const ContButtons = function (props) {
    const { position, args } = props;
    return (
      <Button
        variant="contained"
        color={btnColor[position % 3]}
        onClick={() => {
          console.log(args)
          // $flex[btnInfo[position].fun].apply(this, args);
        }}
        className={classes.btn}
      >
        {btnInfo[position].name}
      </Button>
    );
  };

  const ContTexts = function (props) {
    const { position, ...others } = props;
    return (
      <TextField
        variant="outlined"
        size="small"
        className={classes.field}
        {...others}
      />
    );
  };

  const Contents = (props) => {
    const position = props.position;
    const [args, setData] = React.useState([]);
    const setArgs = (index, data) => {
      args[index] = data;
      setData(args);
    };
    switch (position) {
      case 0:
        return (
          <Card className={classes.card}>
            <ContTexts
              label="Toast Message"
              defaultValue="Toast Message"
              onLoad={() => {
                setArgs(0, "Toast Message");
              }}
              onChange={(event) => {
                setArgs(0, event.target.value);
              }}
            />
            <ContButtons position={position} args={args} />
          </Card>
        );
      case 1:
        return (
          <Card className={classes.card}>
            <ContTexts
              label="Toast Message"
              defaultValue="Toast Message"
              onChange={(event) => {
                setArgs(0, event.target.value);
              }}
            />
            <ContButtons position={position} args={args} />
          </Card>
        );
      case 2:
        return (
          <Card className={classes.card}>
            <ContButtons position={position} />
          </Card>
        );
      default:
        return <div />;
    }
  };

  return (
    <div className={classes.root}>
      {btnInfo.map((_, i) => (
        <Contents position={i} key={i} />
      ))}
    </div>
  );
}
