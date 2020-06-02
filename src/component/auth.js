import React from "react";
import { Root, ContButton, ContText, ContCard } from "./elements";

const infos = [
  {
    name: "Rooting(JailBreak) Check",
    fun: "RootingCheck",
  },
  {
    name: "Authentication",
    fun: "Authentication"
  },
  {
    name: "Get UniqueAppID",
    fun: "UniqueAppID"
  },
  {
    name: "Get UniqueDeviceID",
    fun: "UniqueDeviceID"
  }
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
        return (
          <ContCard title="Rooting(JailBreak) Check Test">
            <ContButton
              funName={info.fun}
              text={info.name}
              position={position}
              dialog={true}
              args={args}
            />
          </ContCard>
        );
      case 0:
        return (
          <ContCard title="Authentication Test">
            <ContButton
              funName={info.fun}
              text={info.name}
              position={position}
              dialog={true}
              args={args}
            />
          </ContCard>
        );
      case 2:
        return (
          <ContCard title="Get Unique App ID Test">
            <ContButton
              funName={info.fun}
              text={info.name}
              position={position}
              dialog={true}
              args={args}
            />
          </ContCard>
        );
      case 3:
        return (
          <ContCard title="Get Unique Device ID Test">
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
