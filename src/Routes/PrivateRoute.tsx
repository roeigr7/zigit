import React from 'react';
import { useSelector } from '../hooks/useTypedSelector';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}: any) => {
  const { token } = useSelector((state: any) => state.login.user);

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to='/' />
      }
    />
  );
};
export default PrivateRoute;
