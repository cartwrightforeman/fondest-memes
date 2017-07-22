import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import MemesIndexContainer from '../containers/MemesIndexContainer';

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/'>
        <Route path='/memes' component={MemesIndexContainer}/>
      </Route>
    </Router>
  )
};

export default App;
