function Jumper(props: any) {
  return (
    <label className="nav-item jsOnly">
      {props.label}
      <select
        id="section-selector"
        className="menu-element str-outlined highlightable"
        title={props.selectTitle}
      >
        {props.anchors.map((anchor: [value: string, text: string]) =>
        (
          <option key={`option-${anchor[0]}`} value={anchor[1]}>{anchor[1]}</option>
        ))}
      </select>
    </label>
  );
}

export default Jumper;
