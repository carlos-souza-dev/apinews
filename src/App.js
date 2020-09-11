import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

/* Componentes */
import All from "./Pages/All"
import Top from "./Pages/Top"
import Brasil from "./Pages/Brasil"
import Franca from "./Pages/Franca"
import Usa from "./Pages/Usa"

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={All}/>
          <Route path="/top" exact component={Top}/>
          <Route path="/brasil" exact component={Brasil}/>
          <Route path="/franca" exact component={Franca}/>
          <Route path="/usa" exact component={Usa}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;