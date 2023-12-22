
import UseAuth from "../../../../../Hooks/UseAuth";

import SingleTodo from "./SingleTodo";
import { useEffect, useState } from "react";
import axios from "axios";


const Todo = () => {

    const {user} = UseAuth() ;


  const [tasks , setTasks] = useState([]) ;

    useEffect( () => {
        axios.get(`https://task-management-server-taupe.vercel.app/tasks?userEmail=${user?.email}`)
        .then(res => {
            setTasks(res.data)
        })
    } , [user])

    return (
      <div>
        <h2 className="text-4xl font-Inter font-bold text-center my-8"> To Do Task</h2>
          <div className="grid grid-cols-3 gap-6">
        
        {
            tasks.map(item => <SingleTodo
            key={item._id}
            item={item}
            ></SingleTodo> )
        }

        </div>
      </div>
    );
};

export default Todo;