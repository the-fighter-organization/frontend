// import * as React from "react";
// import { connect } from "react-redux";
// import { Redirect, Route, RouteProps } from "react-router-dom";

// import { ControleSilosPermissoes } from "../../models/Conta";
// import { ApplicationState } from "../../store/configureReducer";
// import { ContaState } from "../../store/conta/reducer";
// import AuthService from "../../utils/auth";
// import ForbiddenPage from "./ForbiddenPage";

// interface Props extends RouteProps {
//   component: any;
//   state?: ContaState;
//   requiredPermissions?: ControleSilosPermissoes[];
//   forbiddenMessage?: string;
//   forbiddenTitle?: string;
// }

// export const PrivateRoute = ({
//   component: Component,
//   state,
//   forbiddenMessage,
//   forbiddenTitle,
//   requiredPermissions,
//   ...rest
// }: Props) => (
//   <Route
//     {...rest}
//     render={props => {
//       let authorized = AuthService.verifyAuth();

//       // Abrindo bloco de validação das permissões
//       if (requiredPermissions && requiredPermissions.length) {
//         // Verifica se o usuário será bloqueado por permissões
//         let blocked = false;

//         requiredPermissions.forEach(item => {
//           blocked = state.permissoes.indexOf(item) < 0;

//           if (blocked) {
//             return;
//           }
//         });

//         if (blocked) {
//           return (
//             <ForbiddenPage title={forbiddenTitle} detail={forbiddenMessage} />
//           );
//         }
//       }

//       //Ele só renderiza o componente desejado se estiver autenticado
//       return authorized ? <Component {...props} /> : <Redirect to="/login" />;
//     }}
//   />
// );

// const mapStateToProps = (state: ApplicationState) => ({ state: state.conta });

// export default connect(
//   mapStateToProps,
//   null
// )(PrivateRoute);
