// Inclue the React library
import React from "react";

// Include the react-router module
// Include the Route component
// Include the IndexRoute (catch-all route)
// Include the Router component
// Include the browserHistory prop to configure client side routing
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Reference the high-level components
import User from "../components/User";
import Admin from "../components/Admin";

// Export the Routes
export default (
  <Router> 
    <div>
      <Switch>
        <Route exact path="/" component={User} />
        <Route exact path="/admin" component={Admin} />
      </Switch>
    </div>
  </Router>
);