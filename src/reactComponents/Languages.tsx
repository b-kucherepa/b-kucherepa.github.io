function Languages(props: any) {
  return (
    <label className="nav-item">
      {props.label}
      <div className="menu-element">{props.children}</div>
    </label>
  );
}

export default Languages;
