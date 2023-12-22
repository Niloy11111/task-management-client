import { FaFacebook,FaInstagramSquare , FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <div className="pb-10 bg-[#0D1B3E] ">

        <div className="flex lg:flex-row flex-col pt-10 items-center gap-10 justify-center">
          <div>
          <img className="" src="https://hive.com/wp-content/uploads/2022/05/Graphic.svg"></img>
          </div>
            <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">See for yourself why <br /> successful teams move <br /> faster in Hive.</h2>
               <Link to="/login"> <button className="mt-6 bg-[#6473FF] px-8 py-3 font-semibold font-Inter text-white ">Get Started</button></Link>
            </div>
        </div>
         
                        
<div className="pt-10 lg:w-7/12 mx-auto">
                 
  <div className="flex lg:flex-row flex-col md:flex-row  lg:justify-between w-3/4 md:w-full ld:w-3/4 my-10 mx-auto md:justify-center md:gap-14 lg:gap-0">
    
    <div className="text-white ">
      <h2 className="text-white mb-5 font-semibold">Project Management </h2> 
      <ul className="text-gray-300 space-y-3">
      <li><a className="link link-hover">Time Management</a> </li>
      <li><a className="link link-hover">Team Collaboration</a> </li>
      <li><a className="link link-hover">Automations</a> </li>
      <li><a className="link link-hover">Hive Notes</a></li>
      <li><a className="link link-hover">Gantt Charts</a></li>
      <li><a className="link link-hover">Kanban Boards</a></li>
      </ul>
    </div> 
    <div className="text-white lg:mb-0 mb-5 font-semibold">
      <h2 className="text-white mb-5 font-semibold">Company</h2> 
  <ul className="text-gray-300 space-y-3">
  <li> <a className="link link-hover">About us</a> </li>
     <li> <a className="link link-hover">Careers</a> </li>
     <li> <a className="link link-hover">Contact Us</a> </li>
     <li> <a className="link link-hover">Privacy Policy</a></li>
     <li> <a className="link link-hover">Search Foods</a></li>
     <li> <a className="link link-hover">Browse Companies</a></li>
     <li> <a className="link link-hover">Terms of Use</a></li>
  </ul>
    </div> 

    <div className="text-white lg:mb-0 mb-5 font-semibold">
      <h2 className="text-white mb-5 font-semibold">Resources</h2> 
  <ul className="text-gray-300 space-y-3">
  <li>  <a className="link link-hover">Import Work</a> </li>
    <li>  <a className="link link-hover">Platform Status</a> </li>
    <li>  <a className="link link-hover">Product Roadmap</a></li>
    <li>  <a className="link link-hover">Security Overview</a></li>
    <li>  <a className="link link-hover">Google API policy </a></li>
  </ul>
     
    </div> 
    
    <div className="text-white lg:mb-0 mb-5 font-semibold">
      <h2 className="text-white mb-5 font-semibold">Compare</h2> 
     <ul className="text-gray-300 space-y-3">
     <li> <a className="link link-hover">Compare All</a> </li>
     <li> <a className="link link-hover">Asana Alternative</a> </li>
     <li> <a className="link link-hover"> Wrike Alternative</a> </li>
     <li> <a className="link link-hover">Smartsheet Alternative </a></li>
     <li> <a className="link link-hover">Jira Alternative</a></li>
     <li> <a className="link link-hover">Monday.com Alternative</a></li>
     <li> <a className="link link-hover">Trello Alternative</a></li>
     <li> <a className="link link-hover">Basecamp Alternative</a></li>
     </ul>
    </div> 
    </div>

    <div className="flex lg:flex-row flex-col lg:justify-evenly  border-t pt-10 lg:pt-20 space-y-3">
        <img className="mx-auto lg:mx-0 w-[130px] " src="https://hive.com/wp-content/uploads/2022/05/Logo.svg"></img>
        <a className="text-white text-center " href="">Terms of Service</a>
        <a className="text-white text-center" href="">@2015 - 2023 HIVE INC.</a>
        <div className="flex gap-1 justify-center">
        <a href="https:/facebook.com"> <FaFacebook className="text-3xl text-white"></FaFacebook> </a> 
            <a href="https:/instagram.com"> <FaInstagramSquare className="text-white text-3xl"></FaInstagramSquare> </a> 
            <a href="https:/twitter.com"> <FaTwitterSquare className="text-white text-3xl"></FaTwitterSquare> </a>
        </div>
    </div>
  
</div>


      </div>
    );
};

export default Footer;