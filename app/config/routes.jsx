import React from 'react';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';
import Main from '../components/Main';
import Home from '../components/Home';
import PromptContainer from '../containers/PromptContainer';



const routes = (
  <Router>
    <div>
      <Link to="/">Main </Link>
      <Link to="/home">Home</Link>
      <Route component={Main} />
      <Route path="/home" render={(props) => <Home {...props} />} />
      <Route path="/playerOne" render={(props) => <PromptContainer header="Player One" />} />
      <Route path="/playerTwo/:playerOne" render={(props) => <PromptContainer header="Player Two" {...props} />} />
    </div>
  </Router>
);

export default routes;

