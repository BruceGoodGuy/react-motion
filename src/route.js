import React from 'react';
import Home from './components/Home/home';
import NotFound from './components/NotFound/notFound';
import UserContainer from './containers/UserContainer';

const routes = [
    {
        path: '/login',
        exact: false,
        main: () => <UserContainer />
    },
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
];

export default routes;