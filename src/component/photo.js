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
  {
    name: "Get Photo taken with Camera",
    fun: "CameraByDeviceRatio",
  },
];

export default function RecipeReviewCard() {
  const Contents = (props) => {
    const position = props.position;
    const info = infos[position];
    const [args, setData] = React.useState([]);
    const [res, setRes] = React.useState([]);
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
          setArgs(0, 1);
          setArgs(1, false);
        });
        return (
          <ContCard title="Select Img Test">
            <ContImg src={res[0]}/>
            <ContButton
              funName={info.fun}
              text={info.name}
              position={position}
              args={args}
              clickAfter={(res) => {setRes([res.data]);}}
            />
          </ContCard>
        );
      case 2:
        React.useEffect(() => {
          setArgs(0, 1);
          setArgs(1, false);
        });
        return (
          <ContCard title="Select multi Imgs Test">
            <ContImg src={res[0]}/>
            <ContImg src={res[1]}/>
            <ContImg src={res[2]}/>
            <ContImg src={res[3]}/>
            <ContImg src={res[4]}/>
            <ContButton
              funName={info.fun}
              text={info.name}
              position={position}
              args={args}
              clickAfter={(res) => {setRes(res.data);}}
            />
          </ContCard>
        );
      case 3:
        React.useEffect(() => {
          setArgs(0, 1);
          setArgs(1, true);
        });
        return (
          <ContCard title="Camera Test">
            <ContImg src={res[0]}/>
            <ContButton
              funName={info.fun}
              text={info.name}
              position={position}
              args={args}
              clickAfter={(res) => {setRes([res.data]);}}
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
