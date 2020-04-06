import React from "react";
import Home from "./component/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./component/NotFound";
import BodyCream from "./component/BodyCream";
import BodyMists from "./component/BodyMists";
import ShowerGel from "./component/ShowerGel";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/BodyCream" component={BodyCream} />
          <Route exact path="/ShowerGel" component={ShowerGel} />
          <Route exact path="/BodyMists" component={BodyMists} />
          <Route component="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
