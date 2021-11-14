import { Home } from "pages/home";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/manifesto">
          <div>
            <h1>MANIFESTO</h1>
          </div>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
