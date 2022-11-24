import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Main from '../Layout/Main';
import About from '../pages/About';
import AddService from '../pages/AddService';
import AllServices from '../pages/AllServices';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Review from '../pages/Review';
import ReviewsAll from '../pages/ReviewsAll';
import ServiceDatail from '../pages/ServiceDatail';
import Services from '../pages/Services';
import Priviteroutes from './Privet';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
           
            {
                path: '/services/:id',
                element:<ServiceDatail></ServiceDatail>,
                loader: ({ params }) => fetch(`https://photograpy-server-site.vercel.app/service/all/${params.id}`)
            },
            {
                path: '/allservices',
                element:<AllServices></AllServices>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            },
            {
                path: '/reviews',
                element: <Priviteroutes><ReviewsAll></ReviewsAll></Priviteroutes>
            },
            {
                path: '/addservice',
                element: <Priviteroutes><AddService></AddService></Priviteroutes>
            }
            
        ]
    }
])

export default router;