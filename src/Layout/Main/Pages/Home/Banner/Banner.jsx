import { Link } from "react-router-dom";


const Banner = () => {
    return (
     <div className="bg-[#F9ECFE]">
           <div className="flex gap-10 justify-center items-center h-[80vh]">

<div>
    <h2 className="text-5xl font-bold">Task Management</h2>
  <p className="max-w-[400px] mt-5 mb-5 font-Montserrat">Manage both simple and complex projects by breaking them down into milestones, tasklists, tasks, and subtasks. Visualize project plans and track progress efficiently with the help of Gantt charts and Kanban boards and set up dependencies between related tasks to make sure you always stay on schedule.</p>
  <Link to="/login"><button className="bg-[#F0483E] px-7 py-3 text-white font-Montserrat font-medium">Let's Explore</button></Link>

</div>


<div>
    <img className="w-[500px]" src="https://www.zohowebstatic.com/sites/zweb/images/projects/features/tasks-banner.png"></img>
</div>

</div>
     </div>
    );
};

export default Banner;