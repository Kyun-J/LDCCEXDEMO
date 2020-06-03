import React from "react";
import { Root, ContButton, ContText, ContImg, ContCard } from "./elements";

const infos = [
  {
    name: "QRCode Scan",
    fun: "QRCodeScan",
  },
  {
    name: "Select Img from Photos",
    fun: "PhotoByDeviceRatio",
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
      case 1:
        const [res, setRes] = React.useState('');
        React.useEffect(() => {
          setArgs(0,1)
          setArgs(0,true)
        });
        return (
          <ContCard title="Select Img from Photos Test">
            <ContImg src={res}/>
            <ContButton
              funName={info.fun}
              text={info.name}
              position={position}
              args={args}
              clickAfter={(res) => {setRes(res);}}
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
