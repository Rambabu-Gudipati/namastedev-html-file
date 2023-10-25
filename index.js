const headingElement = React.createElement("h1", {
    id  : "heading"
}, "Hello React")

const root = ReactDOM.creatRoot(document.getElementById("root"))
root.render(headingElement)