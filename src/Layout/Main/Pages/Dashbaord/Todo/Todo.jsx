import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../../../Hooks/UseAuth";
import useAxiosPublic from "../../../../../Hooks/UseAxiosPublic";
import SingleTodo from "./SingleTodo";


const Todo = () => {

    const {user} = UseAuth() ;
    const axiosPublic = useAxiosPublic() ;
    const {data : tasks =  [], isPending : loading , refetch} = useQuery({
        queryKey : ['requestedMeals'] ,
        queryFn : async () => {
            const res = await axiosPublic.get(`http://localhost:5000/tasks?userEmail=${user?.email}`) ;
            return res.data
        }
    })

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