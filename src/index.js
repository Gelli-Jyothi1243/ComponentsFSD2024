import ReactDOM from "react-dom";
import App from "./App";

const rootElement=document.getElementById('root');
const rootRef=ReactDOM.createRoot(rootElement);
//rootRef.render(<h1>Hello</h1>);
rootRef.render(<App/>);