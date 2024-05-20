import Head from "./Head.js";
import Html from "./Html.js";

function Page(props: any) {  
  const l = props.lang;
  const data = props.data;
  return (
    <>
      <Html>
        <Head title={data.head.title[l]} description = {data.head.description[l]}/>
      </Html>
    </>
  );
}

export default Page;
