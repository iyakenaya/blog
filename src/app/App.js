import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Page from "./components/page";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={Page} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
