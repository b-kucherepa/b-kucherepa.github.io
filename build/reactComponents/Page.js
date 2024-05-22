import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import Head from "./Head.js";
import Html from "./Html.js";
function Page(props) {
    const l = props.lang;
    const data = props.data;
    return (_jsx(_Fragment, { children: _jsx(Html, { children: _jsx(Head, { title: data.head.title[l], description: data.head.description[l] }) }) }));
}
export default Page;
