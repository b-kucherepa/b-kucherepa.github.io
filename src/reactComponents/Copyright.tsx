import { useContext } from "react";
import { GlobalContext } from "./DataPage.js";

function Copyright(props: { data: any }): JSX.Element {
  const globals = useContext(GlobalContext);

  return (
    <>
      <hr />
      <div id="copyright">{`${
        props.data[globals.lang] ?? props.data[globals.defaultLang]
      } (c)`}</div>
    </>
  );
}

export default Copyright;
