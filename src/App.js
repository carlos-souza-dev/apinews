import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import "./App.css";

/* Componentes */
import All from "./Pages/All"
import Top from "./Pages/Top"
import Brazil from "./Pages/Brazil"
import France from "./Pages/France"
import Usa from "./Pages/Usa"

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={All}/>
          <Route path="/top" exact component={Top}/>
          <Route path="/brasil" exact component={Brazil}/>
          <Route path="/franca" exact component={France}/>
          <Route path="/usa" exact component={Usa}/>
          <Redirect from="*" to="/" />
        </Switch>
    </BrowserRouter>
  );
}

export default App;