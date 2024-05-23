function Copyright(props: { data: any; lang: string }): JSX.Element {
  return (
    <>
      <hr />
      <div id="copyright">{`${props.data[props.lang]} (c)`}</div>
    </>
  );
}

export default Copyright;
