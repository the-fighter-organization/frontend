import * as React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import CookieManager from "../../config/cookie";

// import AuthService from "../../utils/auth";

interface Props extends RouteProps {
  component: any;
}

export const PublicRoute = ({ component: Component, ...rest }: Props) => (
  <Route
    {...rest}
    render={props => {
      //Se a rota for login e ele tiver token, direciona a home
      if (rest.path == "/login" && CookieManager.get()) {
        return <Redirect to="/" />;
      }
      //Se for logout, remove o token ativo
      if (rest.path == "/logout") {
        CookieManager.remove()
      }
      return <Component {...props} />;
    }}
  />
);

export default PublicRoute;
