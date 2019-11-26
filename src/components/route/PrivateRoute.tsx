import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import CookieManager from '../../config/cookie';

interface Props extends RouteProps {
  component: any;
  forbiddenMessage?: string;
  forbiddenTitle?: string;
}

export const PrivateRoute = ({
  component: Component,
  //   state,
  forbiddenMessage,
  forbiddenTitle,
  ...rest
}: Props) => (
    <Route
      {...rest}
      render={props => {
        let authorized = CookieManager.get();
        return authorized ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );

export default PrivateRoute;