import React from 'react';
import Home from './components/Home/home';
import NotFound from './components/NotFound/notFound';
import UserContainer from './containers/UserContainer';
import HomeContainer from './containers/HomeContainer';
import auth from './middleware/auth';

const routes = [
    {
        path: '/login',
        exact: false,
        main: ({history}) => <UserContainer history={history} />
    },
    {
        path: '/',
        exact: true,
        main: () => <HomeContainer/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
];

export default routes;