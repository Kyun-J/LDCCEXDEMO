import React from "react";
import { Root, ContButton, ContText, ContCard } from "./elements";

const infos = [
  {
    name: "Set Data In Local",
    fun: "LocalRepository",
  },
  {
    name: "Get Data In Local",
    fun: "LocalRepository",
  },
  {
    name: "Delete Data In Local",
    fun: "LocalRepository",
  },
  {
    name: "FileDownload From Web",
    fun: "FileDownload",
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
          setArgs(0, 0);
          setArgs(1, "Data Key");
          setArgs(2, "Data Value");
        });
        return (
          <ContCard title="Local Data Set Test">
            <ContText
              label="Data Key"
              defaultValue="Data Key"
              onChange={(event) => {
                setArgs(0, event.target.value);
              }}
            />
            <ContText
              label="Data Value"
              defaultValue="Data Value"
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
      case 1:
        React.useEffect(() => {
          setArgs(0, 1);
          setArgs(1, "Data Key");
        });
        return (
          <ContCard title="Local Data Get Test">
            <ContText
              label="Data Key"
              defaultValue="Data Key"
              onChange={(event) => {
                setArgs(0, event.target.value);
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
      case 2:
        React.useEffect(() => {
          setArgs(0, 2);
          setArgs(1, "Data Key");
        });
        return (
          <ContCard title="Local Data Delete Test">
            <ContText
              label="Data Key"
              defaultValue="Data Key"
              onChange={(event) => {
                setArgs(0, event.target.value);
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
      case 3:
        React.useEffect(() => {
          setArgs(0, "http://www.africau.edu/images/default/sample.pdf");
        });
        return (
          <ContCard title="FileDownload Test">
            <ContText
              label="FileUrl"
              defaultValue="http://www.africau.edu/images/default/sample.pdf"
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
