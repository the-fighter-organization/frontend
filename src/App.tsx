import './App.css';

import React from 'react';
import { Redirect, Router, Switch } from 'react-router-dom';

import PrivateRoute from './components/route/PrivateRoute';
import PublicRoute from './components/route/PublicRoute';
import history from './config/history';
import HomeRouter from './components/home/HomeRouter';

const Login = React.lazy(() => import('./components/conta/Login'));
const NotFoundPage = React.lazy(() => import('./components/route/NotFoundPage'));

const App = props => {
	return (
		<Router history={history}>
        <React.Suspense fallback={<h1>Carregando...</h1>}>
          <Switch>
            <PublicRoute exact path="/not-found" component={NotFoundPage} />
            <PublicRoute exact path="/login" component={Login} />
            <PublicRoute exact path="/logout" component={NotFoundPage} />
            <PrivateRoute path="/" component={HomeRouter} />
            <Redirect to="/not-found" />
          </Switch>
        </React.Suspense>
      </Router>
	);
}


export default App;
