import React from "react";
import { Root, ContButton, ContText, ContCard } from "./elements";

const infos = [
  {
    name: "QRCode Scan",
    fun: "QRCodeScan",
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
        return (
          <ContCard title="QRCodeScan Test">
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
