import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home key="popular" category="popular"/>
          </Route>
          <Route exact path="/top_rated">
            <Home key="top_rated" category="top_rated"/>
          </Route>
          <Route exact path="/upcoming">
            <Home key="upcoming" category="upcoming"/>
          </Route>
          <Route exact path="/now_playing">
            <Home key="now_playing" category="now_playing"/>
          </Route>
        </Switch>
      </Router>
      <div>

      </div>
    </div>
  )
}

export default App;
