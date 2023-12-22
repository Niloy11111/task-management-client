import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./UseAxiosPublic";



const UseTask = () => {
    
    const axiosPublic = useAxiosPublic() ;

    const {data : tasks =  [], isPending : loading , refetch} = useQuery({
        queryKey : ['tasks'] ,
        queryFn : async () => {
            const res = await axiosPublic.get('/tasks') ;
            return res.data
        }
    })

    console.log( 'task', tasks)



    return [tasks, loading, refetch]
};

export default UseTask;