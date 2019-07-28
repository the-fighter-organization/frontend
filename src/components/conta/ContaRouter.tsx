import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

import { CONTA_PERFIL_ROUTE } from '../route/conta';
import PrivateRoute from '../route/PrivateRoute';
import ContaPerfil from './perfil/ContaPerfil';

export default props => (
    <Switch>
        <PrivateRoute component={ContaPerfil} path={CONTA_PERFIL_ROUTE} />
        <Redirect to="/" />
    </Switch>
)