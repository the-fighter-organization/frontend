import './App.css';

import React from 'react';
import { Redirect, Router, Switch } from 'react-router-dom';

import HomeRouter from './components/home/HomeRouter';
import PrivateRoute from './components/route/PrivateRoute';
import PublicRoute from './components/route/PublicRoute';
import history from './config/history';
import { CONTA_NOVO_ROUTE, CONTA_EDITAR_SENHA_ROUTE, CONTA_CONFIRMACAO_SENHA_ROUTE } from './components/route/conta';
import ContaNovo from './components/conta/novo/ContaNovo';
import ContaEditarSenha from './components/conta/editarSenha/ContaEditarSenha';
import ContaConfirmacaoPerfil from './components/conta/confirmacaoPerfil/ContaConfirmacaoPerfil';

const Login = React.lazy(() => import('./components/conta/login/Login'));
const NotFoundPage = React.lazy(() => import('./components/route/NotFoundPage'));

const App = props => {
	return (
		<Router history={history}>
        <React.Suspense fallback={<h1>Carregando...</h1>}>
          <Switch>
            <PublicRoute exact path="/not-found" component={NotFoundPage} />
            <PublicRoute exact path="/login" component={Login} />
            <PublicRoute exact path={CONTA_NOVO_ROUTE} component={ContaNovo} />
            <PublicRoute exact path={CONTA_EDITAR_SENHA_ROUTE} component={ContaEditarSenha} />
            <PublicRoute exact path={`${CONTA_CONFIRMACAO_SENHA_ROUTE}/:id/:codigoConfirmacao`} component={ContaConfirmacaoPerfil} />
            <PublicRoute exact path="/logout" component={NotFoundPage} />
            <PrivateRoute path="/" component={HomeRouter} />
            <Redirect to="/not-found" />
          </Switch>
        </React.Suspense>
      </Router>
	);
}


export default App;
