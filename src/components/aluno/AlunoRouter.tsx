
import PrivateRoute from "../route/PrivateRoute";
import React from "react";
import AlunoInserir from "./AlunoInserir";
import AlunoAlterar from "./AlunoAlterar";
import AlunoHome from "./AlunoHome";
import { Switch, Redirect } from "react-router-dom";

// const AlunoInserir =  React.lazy(() => require("./AlunoInserir"));
// const AlunoAlterar =  React.lazy(() => require("./AlunoAlterar"));
// const AlunoHome =  React.lazy(() => require("./AlunoHome"));

const BASE_ROUTE = 'alunos';

export default props => (
    <Switch>
        <PrivateRoute component={AlunoInserir} path={`/${BASE_ROUTE}/novo`}/>
        <PrivateRoute component={AlunoAlterar} path={`/${BASE_ROUTE}/editar/:id`}/>
        <PrivateRoute component={AlunoHome} path={`/${BASE_ROUTE}`}/>
        <Redirect to={`/${BASE_ROUTE}`}/>
    </Switch>
)