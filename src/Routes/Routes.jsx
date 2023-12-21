import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Layout/Main/Pages/Home/Home";
import Dashboard from "../Layout/Main/Pages/Dashbaord/Dashboard";
import Login from "../Layout/Main/Pages/Login/Login";
import Register from "../Layout/Main/Pages/Home/Register/Register";


export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        errorElement : <h2>error</h2>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/register',
                element : <Register></Register>
            },
        ]
    },
    {
        path : 'dashboard',
        element : <Dashboard></Dashboard>,
        children : [
          {
            path : 'userProfile',
            element : <h2>user</h2>
          }
        ]
    }
])