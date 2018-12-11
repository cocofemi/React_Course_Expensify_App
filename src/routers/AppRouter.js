import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import IncomeDashboardPage from '../components/IncomeDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import AddIncomePage from '../components/AddIncomePage';
import EditExpensePage from '../components/EditExpensePage';
import EditIncomePage from '../components/EditIncomePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <Route path="/income" component={IncomeDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/createincome" component={AddIncomePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <PrivateRoute path="/changeicome/:id" component={EditIncomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
