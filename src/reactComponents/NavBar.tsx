import Jumper from "./Jumper.js";
import Languages from "./Languages.js";
import Themes from "./Themes.js";

export default function NavBar(): JSX.Element {
  const ICON_HEIGHT: number = 16;

  return (
    <nav id="nav-bar">
      <Themes iconHeight={ICON_HEIGHT} />
      <Jumper />
      <Languages iconHeight={ICON_HEIGHT} />
    </nav>
  );
}
