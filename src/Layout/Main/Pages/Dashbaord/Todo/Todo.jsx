
import UseAuth from "../../../../../Hooks/UseAuth";

import SingleTodo from "./SingleTodo";
import { useEffect, useState } from "react";
import axios from "axios";
import UseTask from "../../../../../Hooks/UseTask";


const Todo = () => {

    const {user} = UseAuth() ;

    const [tasks, loading , refetch] = UseTask() ;

   

    return (
      <div className="mr-10 ml-16 mb-20">
        <h2 className="text-4xl font-Inter font-bold text-center my-8"> To Do Task {tasks?.length} </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


        
        {
            tasks?.map(item => <SingleTodo
            key={item._id}
            item={item}
            ></SingleTodo> )
        }

        </div>
      </div>
    );
};

export default Todo;