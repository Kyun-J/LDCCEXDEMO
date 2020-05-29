import React from "react";
import { Root, ContButton, ContText, ContCard } from "./elements";

const infos = [
  {
    name: "Show Dialog",
    fun: "Dialog",
  },  
  {
    name: "Short Toast (Android Only)",
    fun: "ShortToast",
  },
  {
    name: "Long Toast (Android Only)",
    fun: "LongToast",
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
          setArgs(2, [
            ["확인", "basic"],
            ["취소", "cancel"],
            ["삭제", "destructive"],
          ]);
          setArgs(3, "alert");
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
          setArgs(0, "Toast Message");
        });
        return (
          <ContCard title="Short Toast Test">
            <ContText
              label="Toast Message"
              onLoad={() => {
                setArgs(0, "Toast Message");
              }}
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
          setArgs(0, "Toast Message");
        });
        return (
          <ContCard title="Long Toast Test">
            <ContText
              label="Toast Message"
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
