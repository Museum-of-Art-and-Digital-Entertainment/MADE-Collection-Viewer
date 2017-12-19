// Include the Main React Dependencies
import ReactDOM from "react-dom";

// Grabs the Routes
import routes from "./config/routes";

// Renders the contents according to the route page
// Displays the contents in the div app of index.html
// Note how ReactDOM takes in two parameters (the contents and the location)
ReactDOM.render(routes, document.getElementById("root"));
