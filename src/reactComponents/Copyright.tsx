import { useContext } from "react";
import { GlobalContext } from "./GlobalContext.js";

export default function Copyright(props: { data: any }): JSX.Element {
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
