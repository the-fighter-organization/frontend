import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

import { AULAS_EDITAR_ROUTE, AULAS_HOME_ROUTE, AULAS_NOVO_ROUTE } from '../route/aula';
import PrivateRoute from '../route/PrivateRoute';
import AulaAlterar from './AulaAlterar';
import AulaHome from './AulaHome';
import AulaInserir from './AulaInserir';

const BASE_ROUTE = 'aulas';

export default props => (
    <Switch>
        <PrivateRoute component={AulaInserir} path={AULAS_NOVO_ROUTE} />
        <PrivateRoute component={AulaAlterar} path={`${AULAS_EDITAR_ROUTE}/:turmaId/:id`} />
        <PrivateRoute component={AulaHome} path={AULAS_HOME_ROUTE} />
        <Redirect to={`/${BASE_ROUTE}`} />
    </Switch>
)