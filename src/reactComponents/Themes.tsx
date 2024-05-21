function Themes(props: any) {
  return (
    <label className="nav-item jsOnly">
      {props.label}
      <div className="menu-element">{props.children}</div>
    </label>
  );
}

export default Themes;
