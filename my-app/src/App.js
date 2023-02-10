import { useState, useEffect } from "react";
import Movie from "./conponents/Movie";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/movie/:id" >
            <Detail />
          </Route>
          <Route path="/" >
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}


export default App;
