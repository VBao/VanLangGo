import * as React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export function PrivateRoute() {
  let auth = { token: true };
  return auth.token ? <Outlet /> : <Navigate to='/login' />;
}
