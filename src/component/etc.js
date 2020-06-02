import React from "react";
import { Root, ContButton, ContText, ContCard } from "./elements";

const infos = [
  {
    name: "Create Notification",
    fun: "Notification",
  },
  {
    name: "Create PopUp",
    fun: "WebPopup",
  },
  {
    name: "Send SMS",
    fun: "SendSMS",
  },
];

export default function RecipeReviewCard() {
  const Contents = (props) => {
    const position = props.position;
    const info = infos[position];
    const [args, setData] = React.useState([]);
    const setArgs = (index, data) => {
      args[index] = data;
      setData(args);
    };
    switch (position) {
      case 0:
        React.useEffect(() => {
          setArgs(0, "Title Text");
          setArgs(1, null);
          setArgs(2, "Body Text");
        });
        return (
          <ContCard title="Notification Test">
            <ContText
              label="Title Text"
              onChange={(event) => {
                setArgs(0, event.target.value);
              }}
            />
            <ContText
              label="Body Text"
              onChange={(event) => {
                setArgs(2, event.target.value);
              }}
            />
            <ContButton
              funName={info.fun}
              text={info.name}
              position={position}
              args={args}
            />
          </ContCard>
        );
      case 1:
      React.useEffect(() => {
        setArgs(0, false);
        setArgs(1, "popup");
        setArgs(2, 0.5);
        setArgs(3, 0.5);
      });
      return (
        <ContCard title="PopUp Test">
          <ContButton
            funName={info.fun}
            text={info.name}
            position={position}
            args={args}
          />
        </ContCard>
      );
    case 2:
      React.useEffect(() => {
        setArgs(0, null);
        setArgs(1, "SMS Message");
      });
      return (
        <ContCard title="Send SMS Test">
          <ContText
            label="Phone Number"
            onChange={(event) => {
              setArgs(0, event.target.value);
            }}
          />
          <ContText
            label="SMS Message"
            onChange={(event) => {
              setArgs(1, event.target.value);
            }}
          />
          <ContButton
            funName={info.fun}
            text={info.name}
            position={position}
            dialog={true}
            args={args}
          />
        </ContCard>
      );
      default:
        return <div />;
    }
  };
  return (
    <Root>
      {infos.map((_, i) => (
        <Contents position={i} key={i} />
      ))}
    </Root>
  );
}
