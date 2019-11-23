import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { About, Contacts, Foundation, Gallery, Leaders, Program, NotFound } from '../routes';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/foundation">Foundation</Link>
          </li>
          <li>
            <Link to="/program">Program</Link>
          </li>
          <li>
            <Link to="/leaders">Leaders</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/foundation">
            <Foundation />
          </Route>
          <Route path="/program">
            <Program />
          </Route>
          <Route path="/leaders">
            <Leaders />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
