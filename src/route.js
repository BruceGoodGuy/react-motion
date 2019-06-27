import React from 'react';
import Login from './components/Login/login';
import Home from './components/Home/home';
import NotFound from './components/NotFound/notFound';

const routes = [
    {
        path: '/login',
        exact: false,
        main: () => <Login />
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