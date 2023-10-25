const headingElement = React.createElement("h1", {
    id  : "heading"
}, "Hello React")
console.log(headingElement)

const mainContianer = React.createElement("div", {id : "maincontainer"}, [React.createElement("h1", {
    id  : "heading1"
}, "Hello React1"),React.createElement("h1", {
    id  : "heading2"
}, "Hello React2")])


const mainContianer1 = React.createElement("div", {id : "maincontainer"}, [React.createElement("div", {
    id  : "subcontainer"
}, [React.createElement("h3", {
    id  : "heading3"
}, "Hello React3"),React.createElement("h4", {
    id  : "heading4"
}, "Hello React4")])])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(headingElement)