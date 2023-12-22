
const SingleTodo = ({item}) => {
    const {priority, description, postTime, name } = item ;
    
    return (
        <div className="bg-gray-100 p-7 rounded" >
            <h2 className="text-xl font-medium font-Montserrat">{name}</h2>
            <p className="text-lg font-Inter my-2"> {description}</p>
            <div>
                <p className="font-inter ">Submission Time {postTime}</p>
                <p className="font-inter bg-red-300 max-w-max px-1 rounded">{priority}</p>
            </div>

            
        </div>
    );
};

export default SingleTodo;