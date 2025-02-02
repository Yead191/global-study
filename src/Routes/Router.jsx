import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Pages/Home';
import Country from '../components/Country';
import ScrollToTop from '../components/ScrollToTop';
import SingleUni from '../components/SingleUni';

import Login from '../Pages/Login';
import Register from '../Pages/Register';
import About from '../Pages/About';
import PrivateRoutes from './PrivateRoutes';
import ErrorPage from '../components/ErrorPage';
import Profile from '../Pages/Profile';
import ForgetPass from '../components/ForgetPass';
import Admission from '../Pages/Admission';
import Contact from '../components/Contact';

const Router = createBrowserRouter([
    {
        path: '/',
        element: (<>
        <ScrollToTop></ScrollToTop>
        <Root></Root>
        </>),
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('../countries.json')
            },
            {
                path: '/country/:countryId',
                element: <Country></Country>,
                loader: ()=>fetch(`../universities.json`)
            },
            {
                path: 'university/:universityId',
                element: <PrivateRoutes> <SingleUni></SingleUni> </PrivateRoutes>,
                loader: ()=>fetch(`../universities.json`)

            },
            {
                path: '/login',
                element: <Login></Login>,
                
            },
            {
                path: '/register',
                element: <Register></Register>,
                
            },
            {
                path: '/forgetPass',
                element: <ForgetPass></ForgetPass>
            },
            {
                path: '/about',
                element: <About></About>,
                
            },
            {
                path: '/contact',
                element: <Contact></Contact> ,
                
            },
            {
                path: '/profile',
                element: <PrivateRoutes> <Profile></Profile> </PrivateRoutes>
            },
            {
                path: '/admissions',
                element: <PrivateRoutes> <Admission></Admission> </PrivateRoutes>
            },

        ]
    }
])

export default Router;