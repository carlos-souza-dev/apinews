import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HeaderBar from "./Componets/Header"
import All from "./Pages/All"
import Brasil from "./Pages/Brasil"
import Usa from "./Pages/Usa"
import Top from "./Pages/Top"

function App() {

  return (
    <Router>
      <div className="App">
        <HeaderBar/>
        <Switch>
          <Route path="/" exact component={All}/>
          <Route path="/top" exact component={Top}/>
          <Route path="/brasil" exact component={Brasil}/>
          <Route path="/usa" exact component={Usa}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;