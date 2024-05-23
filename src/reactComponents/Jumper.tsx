function Jumper(props: {
  data: any;
  lang: string;
  sections: any[];
}): JSX.Element {
  return (
    <label className="nav-item jsOnly">
      {props.data.label[props.lang] + " "}
      <select
        id="section-selector"
        className="menu-element str-outlined highlightable"
        title={props.data.selectTitle[props.lang]}
      >
        {props.sections.map((section: any) => (
          <option key={`option-${section.id}`} value={section.id}>
            {section.header[props.lang]}
          </option>
        ))}
      </select>
    </label>
  );
}

export default Jumper;
