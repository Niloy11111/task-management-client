import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./UseAxiosPublic";
import UseAuth from "./UseAuth";



const UseTask = () => {
    const {user} = UseAuth() ;
    const axiosPublic = useAxiosPublic() ;

    const {data : tasks , isPending : loading , refetch} = useQuery({
        queryKey : ['tasks'] ,
        queryFn : async () => {
            const res = await axiosPublic.get(`/tasks?userEmail=${user?.email}`) ;
            return res.data
        }
    }) ;


    return [tasks, loading, refetch]
};

export default UseTask;