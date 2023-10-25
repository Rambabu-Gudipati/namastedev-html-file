const headingElement = React.createElement("h1", {
    id  : "heading"
}, "Hello React")
console.log(headingElement)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(headingElement)