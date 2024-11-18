import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Pages/Home';
import Country from '../components/Country';
import ScrollToTop from '../components/ScrollToTop';

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
            }
        ]
    }
])

export default Router;