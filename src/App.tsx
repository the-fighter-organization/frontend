import './App.css';

import React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';

import history from './config/router';
import Login from './components/conta/Login';

const Home = React.lazy(() => import('./components/home/Home'));
const NotFoundPage = React.lazy(() => import('./components/route/NotFoundPage'));

const App = props => {
	return (
		<Router history={history}>
        <React.Suspense fallback={<h1>Carregando...</h1>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/not-found" component={NotFoundPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={NotFoundPage} />
            <Redirect to="/not-found" />
          </Switch>
        </React.Suspense>
      </Router>
	);
}


export default App;
