import Jumper from "./Jumper.js";
import Languages from "./Languages.js";
import Themes from "./Themes.js";

function NavBar (props: {data: any, lang: string, sections: any[], pagePrefix: string}) {
  const ICON_HEIGHT:number=16;
  return (
    <nav id="nav-bar">
    <Themes
      data={props.data.themes}
      iconHeight={ICON_HEIGHT}
      lang={props.lang}
    />
    <Jumper
      data={props.data.jumper}
      sections={props.sections}
      lang={props.lang}
    />
    <Languages
      data={props.data.languages}
      iconHeight={ICON_HEIGHT}
      lang={props.lang}
      pagePrefix={props.pagePrefix}
    />
  </nav>
  )
}

export default NavBar;