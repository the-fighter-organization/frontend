import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import CookieManager from '../../config/cookie';

interface Props extends RouteProps {
  component: any;
//   state?: ContaState;
//   requiredPermissions?: ControleSilosPermissoes[];
  forbiddenMessage?: string;
  forbiddenTitle?: string;
}

export const PrivateRoute = ({
  component: Component,
//   state,
  forbiddenMessage,
  forbiddenTitle,
//   requiredPermissions,
  ...rest
}: Props) => (
  <Route
    {...rest}
    render={props => {
      let authorized = CookieManager.get();

    //   // Abrindo bloco de validação das permissões
    //   if (requiredPermissions && requiredPermissions.length) {
    //     // Verifica se o usuário será bloqueado por permissões
    //     let blocked = false;

    //     requiredPermissions.forEach(item => {
    //       blocked = state.permissoes.indexOf(item) < 0;

    //       if (blocked) {
    //         return;
    //       }
    //     });

    //     if (blocked) {
    //       return (
    //         <ForbiddenPage title={forbiddenTitle} detail={forbiddenMessage} />
    //       );
    //     }
    //   }

      //Ele só renderiza o componente desejado se estiver autenticado
      return authorized ? <Component {...props} /> : <Redirect to="/login" />;
    }}
  />
);

export default PrivateRoute;

// const mapStateToProps = (state: ApplicationState) => ({ state: state.conta });

// export default connect(
//   mapStateToProps,
//   null
// )(PrivateRoute);
