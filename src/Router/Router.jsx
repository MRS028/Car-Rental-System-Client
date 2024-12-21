import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../Components/Layouts/MainLayOut';
import Home from '../Components/Pages/Home/Home';
import AuthLayout from '../Components/Layouts/AuthLayout';
import LoginPage from '../Components/Pages/Auth/LoginPage';
import Register from '../Components/Pages/Auth/RegistrationPage';
import ErrorPage from '../Components/Pages/ErrorPage/ErrorPage';
import ForgetPassword from '../Components/Pages/Auth/ForgetPassword';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'',
                element:<AuthLayout></AuthLayout>,
                children : [
                    {
                        path: '/auth/login',
                        element: <LoginPage></LoginPage>
                    },
                    {
                        path: '/auth/register',
                        element: <Register></Register>
                    },
                    {
                        path: '/auth/forgetpassword',
                        element: <ForgetPassword></ForgetPassword>
                    }

                ]
            }
        ]
    },
    {
        path:'/*',
        element: <ErrorPage></ErrorPage>
    }
]);

export default Router;