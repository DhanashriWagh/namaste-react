
const heading = React.createElement("h1", {id:"heading", class:"head"}, "Hello World From React!");
const para = React.createElement("p", {}, "This is React Paragraph");
const heading2 = React.createElement("h2", {}, "This is React heading 2");
const container = React.createElement("div", {}, heading, para, heading2);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
