import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Layout/Main/Pages/Home/Home";
import Dashboard from "../Layout/Main/Pages/Dashbaord/Dashboard";
import Login from "../Layout/Main/Pages/Login/Login";
import Register from "../Layout/Main/Pages/Home/Register/Register";
import UserProfile from "../Layout/Main/Pages/Dashbaord/UserProfile/UserProfile";
import Todo from "../Layout/Main/Pages/Dashbaord/Todo/Todo";
import CreateTask from "../Layout/Main/Pages/Dashbaord/CreateTask/CreateTask";
import UpdateTask from "../Layout/Main/Pages/Dashbaord/Todo/UpdateTask";
import PrivateRoute from "./PrivateRoute";


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
        element : <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children : [
          {
            path : 'userProfile',
            element : <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
          },
          {
            path : 'createTask',
            element : <PrivateRoute><CreateTask></CreateTask></PrivateRoute>
          },
          {
            path : 'Todo',
            element :<PrivateRoute> <Todo></Todo></PrivateRoute>
          },
          {
            path : 'ongoing',
            element : <PrivateRoute> <Todo></Todo></PrivateRoute>
          },
          {
            path : 'completed',
            element :<PrivateRoute> <Todo></Todo></PrivateRoute>
          },
          {
            path : 'updateTask/:id',
          
            element : <PrivateRoute><UpdateTask></UpdateTask> </PrivateRoute>,
            loader : ({params}) => fetch(`https://task-management-server-taupe.vercel.app/tasks/${params.id}`)  
          },
        ]
    }
])