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
            element : <UserProfile></UserProfile>
          },
          {
            path : 'createTask',
            element : <CreateTask></CreateTask>
          },
          {
            path : 'Todo',
            element : <Todo></Todo>
          },
          {
            path : 'ongoing',
            element : <Todo></Todo>
          },
          {
            path : 'completed',
            element : <Todo></Todo>
          },
          {
            path : 'updateTask/:id',
          
            element : <UpdateTask></UpdateTask> ,
            loader : ({params}) => fetch(`http://localhost:5000/tasks/${params.id}`)  
          },
        ]
    }
])