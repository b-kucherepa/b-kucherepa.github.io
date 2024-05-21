function Languages(props: any) {
  const l: string = props.lang;
  return (
    <label className="nav-item">
    {props.languages.label}
    <div className="menu-element">
      <a href="maineng.html">
        <img
          className="lang-icon highlightable"
          src="icons/themes/us-flag-ico.svg"
          height={12}
          title="Switch to English"
          alt="English icon"
        />
      </a>
      <img
        className="lang-icon str-outlined"
        src="icons/themes/ru-flag-ico.svg"
        height={12}
        title="Выбран русский"
        alt="Значок русского"
        lang="ru-RU"
      />
    </div>
  </label>
  )
}

export default Languages;