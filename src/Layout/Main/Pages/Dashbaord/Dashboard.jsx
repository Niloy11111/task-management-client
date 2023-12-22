import { NavLink, Outlet } from "react-router-dom";
import {FaPray} from 'react-icons/fa';
import UseAuth from "../../../../Hooks/UseAuth";

const Dashboard = () => {

    const {logOut, user} = UseAuth() ;
    console.log(user)

    return (
        <div className="flex lg:flex-row flex-col  lg:gap-20">

            <div className="lg:w-96 lg:min-h-screen lg:border-r pt-10  lg:pl-20 menu mx-auto lg:mx-0">
                <h2 className="text-lg font-Inter my-3">Task Management Dashboard</h2>
                <ul className="space-y-2">
               <li> <NavLink to="/dashboard/userProfile"> <FaPray></FaPray> MY Profile </NavLink></li>
               <li> <NavLink to="/dashboard/createTask"> <FaPray></FaPray> Create Task </NavLink></li>
                    
                   <li> <NavLink to="/dashboard/todo"> <FaPray></FaPray> To Do Task </NavLink></li>
                   <li> <NavLink to="/dashboard/ongoing"> <FaPray></FaPray> Ongoing Task</NavLink></li>
                   <li> <NavLink to="/dashboard/completed"> <FaPray></FaPray> Completed Task</NavLink></li>
                   <li> <NavLink to="/"> <FaPray></FaPray> Go Home</NavLink></li>
                   <li onClick={logOut}> <NavLink to="/"> <FaPray></FaPray>Logout </NavLink></li>
                </ul>
            </div>

            <div className="mt-10 mr-10">
                <Outlet></Outlet>
            </div>
            
            
        </div>
    );
};

export default Dashboard;