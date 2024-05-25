import { useContext } from "react";
import { GlobalContext } from "./DataPage.js";

function Jumper(props: { data: any; sections: any[] }): JSX.Element {
  const globals = useContext(GlobalContext);

  return (
    <label className="nav-item jsOnly">
      {props.data.label[globals.lang] ??
        props.data.label[globals.defaultLang] + " "}
      <select
        id="section-selector"
        className="menu-element str-outlined highlightable"
        title={
          props.data.selectTitle[globals.lang] ??
          props.data.selectTitle[globals.defaultLang]
        }
      >
        {props.sections.map((section: any) => (
          <option key={`option-${section.id}`} value={section.id}>
            {section.header[globals.lang] ??
              section.header[globals.defaultLang]}
          </option>
        ))}
      </select>
    </label>
  );
}

export default Jumper;
