import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import bannerFirst from "../../../../../assets/bannerAnimation/Animation - 1706532449925.json";
import bannerSecond from "../../../../../assets/bannerAnimation/Animation - 1707063121384.json";
import bannerT from "../../../../../assets/bannerAnimation/UXsWHFSAaz.json";
import bannerFourth from "../../../../../assets/bannerAnimation/is5WNsFx8i.json";
import bannerFive from "../../../../../assets/lottie/Bedges/eyvoDqwwLu.json";
import bannerSix from "../../../../../assets/lottie/Bedges/rfB3OLjbdi.json";
import bannerSeven from "../../../../../assets/lottie/Bedges/uVh8iOBGBC.json";
const Banner = () => {
  return (
    <div className="bg-[#F9ECFE]">
      <div className="flex md:flex-row lg:flex-row flex-col gap-10 justify-center items-center md:h-[80vh] py-10 lg:pt-0 ">
        <div>
          <h2 className="text-3xl md:text-4xl  lg:text-5xl font-bold">
            Task Management
          </h2>
          <p className="max-w-[320px] lg:max-w-[400px] mt-5 mb-5 font-Montserrat">
            Manage both simple and complex projects by breaking them down into
            milestones, tasklists, tasks, and subtasks. Visualize project plans
            and track progress efficiently with the help of Gantt charts and
            Kanban boards and set up dependencies between related tasks to make
            sure you always stay on schedule.
          </p>
          <Link to="/login">
            <button className="bg-[#F0483E] px-7 py-3 text-white font-Montserrat font-medium">
              Let's Explore
            </button>
          </Link>
        </div>

        <div>
          <img
            className="w-[300px] lg:w-[500px]"
            src="https://www.zohowebstatic.com/sites/zweb/images/projects/features/tasks-banner.png"
          ></img>
        </div>
      </div>

      <div className="flex">
        <Lottie animationData={bannerFirst} loop={true}></Lottie>
        <Lottie animationData={bannerSecond} loop={true}></Lottie>
        <Lottie animationData={bannerT} loop={true}></Lottie>
        <Lottie animationData={bannerFourth} loop={true}></Lottie>
        <Lottie animationData={bannerFive} loop={true}></Lottie>
        <Lottie animationData={bannerSix} loop={true}></Lottie>
        <Lottie animationData={bannerSeven} loop={true}></Lottie>
      </div>
    </div>
  );
};

export default Banner;
