import React from "react";
import Home from "./component/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./component/NotFound";
import BodyCream from "./component/BodyCream";
import BodyMists from "./component/BodyMists";
import ShowerGel from "./component/ShowerGel";
import Cart from "./component/Cart";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {store} from "./store.js";
import {persistor} from "./store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/BodyCream" component={BodyCream} />
              <Route exact path="/ShowerGel" component={ShowerGel} />
              <Route exact path="/BodyMists" component={BodyMists} />
              <Route exact path="/Cart" component={Cart} />
              <Route component="*" component={NotFound} />
            </Switch>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
