import React from "react";
import { Root, ContButton, ContImg, ContCard } from "./elements";

const infos = [
  {
    name: "QRCode Scan",
    fun: "QRCodeScan",
  },
  {
    name: "Select Img from Photos",
    fun: "PhotoByDeviceRatio",
  },
  {
    name: "Select multi Imgs from Photos",
    fun: "MultiPhotoByDeviceRatio",
  },
];

export default function RecipeReviewCard() {
  const Contents = (props) => {
    const position = props.position;
    const info = infos[position];
    const [args, setData] = React.useState([]);
    const [res, setRes] = React.useState(["data:image/jpeg;base64,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"]);
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
        React.useEffect(() => {
          setArgs(0, 0.6);
          setArgs(0, false);
        });
        return (
          <ContCard title="Select Img Test">
            <ContImg src={res[0]}/>
            <ContButton
              funName={info.fun}
              text={info.name}
              position={position}
              args={args}
              clickAfter={(res) => {setRes([res]);}}
            />
          </ContCard>
        );
      case 2:
        React.useEffect(() => {
          setArgs(0, 0.3);
          setArgs(1, false);
        });
        return (
          <ContCard title="Select multi Imgs Test">
            <ContImg src={res[0]}/>
            <ContImg src={res[1]}/>
            <ContImg src={res[2]}/>
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
