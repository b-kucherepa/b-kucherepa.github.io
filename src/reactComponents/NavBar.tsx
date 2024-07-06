import Jumper from "./Jumper.js";
import Languages from "./Languages.js";
import Themes from "./Themes.js";

export default function NavBar(props: {
  data: any;
  sections: any[];
}): JSX.Element {
  const ICON_HEIGHT: number = 16;
  return (
    <nav id="nav-bar">
      <Themes data={props.data.themes} iconHeight={ICON_HEIGHT} />
      <Jumper data={props.data.jumper} sections={props.sections} />
      <Languages data={props.data.languages} iconHeight={ICON_HEIGHT} />
    </nav>
  );
}
