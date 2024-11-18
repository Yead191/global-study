import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Pages/Home';
import Country from '../components/Country';
import ScrollToTop from '../components/ScrollToTop';
import SingleUni from '../components/SingleUni';

const Router = createBrowserRouter([
    {
        path: '/',
        element: (<>
        <ScrollToTop></ScrollToTop>
        <Root></Root>
        </>),
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
                element: <SingleUni></SingleUni>,
                loader: ()=>fetch(`../universities.json`)

            }
        ]
    }
])

export default Router;