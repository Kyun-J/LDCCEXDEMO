import React from "react";
import { Root, ContButton, ContText, ContCard } from "./elements";

const infos = [
  {
    name: "Show Dialog",
    fun: "Dialog",
  },
  {
    name: "Show Bottom Dialog",
    fun: "Dialog",
  },  
  {
    name: "Short Toast",
    fun: "Toast",
  },
  {
    name: "Long Toast",
    fun: "Toast",
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
          setArgs(1, "Body Text");
          setArgs(2, {
            "basic": "확인",
            "destructive": "삭제",
            "cancel": "취소"
          });
          setArgs(3, true);
          setArgs(4, true);
        });
        return (
          <ContCard title="Dioalog Test">
            <ContText
              label="Title Text"
              onChange={(event) => {
                setArgs(0, event.target.value);
              }}
            />
            <ContText
              label="Body Text"
              onChange={(event) => {
                setArgs(1, event.target.value);
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
          setArgs(0, "Title Text");
          setArgs(1, "Body Text");
          setArgs(2, {
            "basic": "확인",
            "destructive": "삭제",
            "cancel": "취소"
          });
          setArgs(3, false);
          setArgs(4, true);
        });
        return (
          <ContCard title="Bottom Dioalog Test">
            <ContText
              label="Title Text"
              onChange={(event) => {
                setArgs(0, event.target.value);
              }}
            />
            <ContText
              label="Body Text"
              onChange={(event) => {
                setArgs(1, event.target.value);
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
          setArgs(0, "Short Toast Message");
          setArgs(1, true);
        });
        return (
          <ContCard title="Short Toast Test">
            <ContText
              label="Short Toast Message"
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
      case 3:
        React.useEffect(() => {
          setArgs(0, "Long Toast Message");
          setArgs(1, false);
        });
        return (
          <ContCard title="Long Toast Test">
            <ContText
              label="Long Toast Message"
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
