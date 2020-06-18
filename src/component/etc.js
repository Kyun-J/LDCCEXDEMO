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
          const obj = {
            "title" : "Title"
            ,"subTitle" : null
            ,"message" : "Message"
            ,"badge" : 1
            ,"identifier" : "identi"
            ,"isRepeat" : false
            ,"duration" : 0
          }
        React.useEffect(() => {
          setArgs(0, obj);
        });
        return (
          <ContCard title="Notification Test">
            <ContText
              label="Title Text"
              onChange={(event) => {
                obj.title = event.target.value;
                setArgs(0, obj);
              }}
            />
            <ContText
              label="Body Text"
              onChange={(event) => {
                obj.message = event.target.value;
                setArgs(0, obj);
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
        setArgs(0, "https://naver.com");
        setArgs(1, 0.9);
      });
      return (
        <ContCard title="PopUp Test">
          <ContText
              label="Popup Url"
              defaultValue="https://naver.com"
              onChange={(event) => {
                setArgs(0, event.target.value);
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
    case 2:
      React.useEffect(() => {
        setArgs(0, "01099642514");
        setArgs(1, "SMS Message");
      });
      return (
        <ContCard title="Send SMS Test">
          <ContText
            label="Phone Number"
            defaultValue="01099642514"
            onChange={(event) => {
              setArgs(0, event.target.value);
            }}
          />
          <ContText
            label="SMS Message"
            defaultValue="SMS Message"
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
