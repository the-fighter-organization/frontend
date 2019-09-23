import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

import PrivateRoute from '../route/PrivateRoute';
import TurmaAlterar from './TurmaAlterar';
import TurmaHome from './TurmaHome';
import TurmaInserir from './TurmaInserir';
import { TURMAS_NOVO_ROUTE, TURMAS_EDITAR_ROUTE, TURMAS_HOME_ROUTE, TURMAS_REGISTRAR_CHAMADA_ROUTE } from '../route/turma';

const BASE_ROUTE = 'turmas';

export default props => (
    <Switch>
        <PrivateRoute component={TurmaInserir} path={TURMAS_NOVO_ROUTE} />
        <PrivateRoute component={TurmaAlterar} path={`${TURMAS_EDITAR_ROUTE}/:id`} />
        <PrivateRoute component={TurmaAlterar} path={`${TURMAS_REGISTRAR_CHAMADA_ROUTE}/:id`} />
        <PrivateRoute component={TurmaHome} path={TURMAS_HOME_ROUTE} />
        <Redirect to={`/${BASE_ROUTE}`} />
    </Switch>
)