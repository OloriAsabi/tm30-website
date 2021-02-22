import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { HOME, NOT_FOUND } from '../pages/pagesPath';

interface RouteType {
  path: string;
  component: React.FC<any>;
  exact?: boolean;
}

export const convertRoutesToComponents = (routes: RouteType[]) => {
  const paths = window.location.pathname


  return (
    <Switch>
      {routes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
       {
       paths === "/" ? 
       <Redirect to={HOME}/> : 
       <Redirect to={NOT_FOUND} /> 
     }
    </Switch>
  );
};
