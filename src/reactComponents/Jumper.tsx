import { useContext } from "react";
import { PageContext } from "./PageContext.js";

export default function Jumper(): JSX.Element {
  const data = useContext(PageContext);

  return (
    <label className="nav-item jsOnly">
      {data.nav.jumper.label[data.lang] ??
        data.nav.jumper.label[data.meta.langs[0]]}
      <select
        id="section-selector"
        className="menu-element str-outlined highlightable"
        title={
          data.nav.jumper.selectTitle[data.lang] ??
          data.nav.jumper.selectTitle[data.meta.langs[0]]
        }
      >
        {data.page.sections.map((section: any) => (
          <option key={`option-${section.id}`} value={section.id}>
            {section.header[data.lang] ?? section.header[data.meta.langs[0]]}
          </option>
        ))}
      </select>
    </label>
  );
}
