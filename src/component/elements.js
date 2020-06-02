import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
    padding: 10,
    overflow: "scroll",
    display: "block",
    '&::-webkit-scrollbar': {
        display: 'none'
    }
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
    marginTop: 15,
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#fdfdfd",
  },
  field: {
    margin: 10,
    width: "40%",
    minWidth: 200,
  },
  titleRoot: {
    padding: 5,
  },
}));

export const ContButton = function (props) {
  const classes = useStyles();
  const { funName, text, position, args, dialog, ...others } = props;

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={async () => {
        const result = await $flex[funName].apply(this, args);
        if(dialog) {
          let body = '';
          if(typeof result === 'object') {
            Object.keys(result).forEach(k => {
              body.concat(k).concat(' : ').concat(result[k]).concat('/n');
            });
          } else {
            body = String(result);
          }
          $flex.Dialog(text, body, [['확인','basic']], true, true);
        }
      }}
      className={classes.btn}
      {...others}
    >
      {text}
    </Button>
  );
};

export const ContText = function (props) {
  const classes = useStyles();
  const { ...others } = props;

  return (
    <TextField
      variant="outlined"
      size="small"
      className={classes.field}
      {...others}
    />
  );
};

export const ContCard = function (props) {
  const classes = useStyles();
  const { children, title, ...others } = props;

  return (
    <Card className={classes.card} {...others}>
      <CardHeader
        classes={{ root: classes.titleRoot }}
        titleTypographyProps={{ variant: "h6" }}
        title={title}
      />
      <Divider style={{margin: 5}} />
      {children}
    </Card>
  );
};

export const Root = function (props) {
  const classes = useStyles();
  const { children, ...others } = props;
  const [height, setHeight] = React.useState(window.outerHeight);
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setHeight(window.outerHeight);
    });
  });

  return (
    <div className={classes.root} style={{ height: height - 76 }} {...others}>
      {children}
    </div>
  );
};
