import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

import { CONFIGURACOES_HOME_ROUTE } from '../route/configuracoes';
import PrivateRoute from '../route/PrivateRoute';
import ConfiguracaoAlterar from './ConfiguracaoAlterar';

export default props => (
    <Switch>
        <PrivateRoute component={ConfiguracaoAlterar} path={CONFIGURACOES_HOME_ROUTE} />
        <Redirect to={"/"} />
    </Switch>
)