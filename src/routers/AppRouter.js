import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import Header from '../components/Header';
import NotFound from '../components/NotFound';
import LoginPage from '../components/LoginPage';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={LoginPage} exact={true} />
            <Route path="/dashboard" component={ExpenseDashboardPage} />
            <Route path="/home" component={ExpenseDashboardPage}/>
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFound} />
        </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;