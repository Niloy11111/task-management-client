import { Link } from "react-router-dom";
import useAxiosPublic from "../../../../../Hooks/UseAxiosPublic";
import Swal from "sweetalert2";
import UseTask from "../../../../../Hooks/UseTask";

const SingleTodo = ({item}) => {
    const { priority, description, postTime, name , _id} = item ;

    const [tasks, loading, refetch] = UseTask() ;

    const axiosPublic = useAxiosPublic() ;
 
    const handleDeleteTask = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosPublic.delete(`/tasks/${item._id}`);
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    refetch() ;
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
  
  
            }
        });
    }
    
    return (
        <div className="bg-gray-100 p-7 rounded" >
            <h2 className="text-xl font-medium font-Montserrat">{name}</h2>
            <p className="text-lg font-Inter my-2"> {description}</p>
            <div className="flex gap-3"> 
                <p className="font-inter ">Submission Time {postTime}</p>
                <p className="font-inter bg-[#555eac] text-white max-w-max px-1 rounded">{priority}</p>
            </div>
         <div className="mt-3">

         <button  onClick={() => handleDeleteTask(item)} className=" bg-[#6473FF] px-6 py-2 font-semibold font-Inter text-white ">Delete</button>
         <Link to={`/dashboard/updateTask/${_id}`}> <button  className="ml-4 bg-[#6473FF] px-6 py-2 font-semibold font-Inter text-white ">Edit</button></Link>
         </div>

            
        </div>
    );
};

export default SingleTodo;