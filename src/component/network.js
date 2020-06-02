import React from "react";
import { Root, ContButton, ContCard } from "./elements";

const infos = [
  {
    name: "Network",
    fun: "Network",
  },
  {
    name: "Location",
    fun: "Location",
  },  
];

export default function RecipeReviewCard() {
  const Contents = (props) => {
    const position = props.position;
    const info = infos[position];
    switch (position) {
      case 0:
        return (
          <ContCard title="Network Test">
            <ContButton
              funName={info.fun}
              text={info.name}
              position={position}
              dialog={true}
              args={args}
            />
          </ContCard>
        );
      case 1:
        return (
          <ContCard title="Location Test">
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
