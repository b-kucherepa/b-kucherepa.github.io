function Jumper (props: { data: any; lang: string; sections: any[] }) {
  return (
    <label className="nav-item jsOnly">
      {props.data.label[props.lang]+" "} 
      <select
        id="section-selector"
        className="menu-element str-outlined highlightable"
        title={props.data.selectTitle[props.lang]}
      >
        {props.sections.map((s) => (
          <option key={`option-${s.id}`} value={s.id}>
            {s.header[props.lang]}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Jumper;
