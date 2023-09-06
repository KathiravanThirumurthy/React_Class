/*
<div id="parent">
    <div id="child1">
        <h1 id="heading">This is header one </h1>
        <h2 id="heading2">This is header two </h1>
    </div>
    <div id="child2">
        <h1>This is header one </h1>
        <h2>This is header two </h1>
    </div>
</div>
*/

const parent=React.createElement("div",{id:"parent"},
[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{id:"heading"},"this is header one"),
        React.createElement("h2",{id:"heading2"},"this is header two")
        ]),

 React.createElement("div",{id:"child2"},[
    React.createElement("h1",{id:"heading3"},"this is header three"),
    React.createElement("h2",{id:"heading4"},"this is header four")
    ]),
],
);
// jsx
//const heading=React.createElement("h1",{id:"heading",xya:"abc"},"This is header one");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
