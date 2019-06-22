import './App.css';

import React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';

import history from './config/router';
import Home from './components/home/Home';

const App = props => {
	return (
		<Router history={history}>
        <React.Suspense fallback={<h1>Carregando...</h1>}>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <PublicRoute exact path="/logout" component={Login} />
            <PrivateRoute path="/" component={HomeRouter} /> */}
            {/* <Redirect to="/" /> */}
          </Switch>
        </React.Suspense>
      </Router>
	);
}


export default App;
