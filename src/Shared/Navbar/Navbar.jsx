
import { Link, NavLink } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

const Navbar = () => {

    const {user, logOut} = UseAuth() ;

    const navlinksBeforeLogin = <>
        <li>
            <NavLink to="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "  bg-[#6161FF] text-[#FFF] px-3 py-3 rounded" : ""
            }>HOME</NavLink>
        </li>


        <li className='border px-4 py-3'>
            <NavLink to='/login' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "   text-[#374151]   rounded" : ""
            }>Get Started</NavLink>
        </li>

    </>

    const navLinks = <>
        <li className="">
            <NavLink to="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "  bg-[#005C98] text-[#FFF] px-3 py-3 rounded" : ""
            }>HOME</NavLink>
        </li>

        <li>
       <div className="dropdown hidden lg:block dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-[60px] rounded-full">
                    <img src={user?.photoURL} alt='come' />
                </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <button className="btn btn-sm  btn-ghost">{user?.displayName}</button>
                </li>
                <li> <Link to='/dashboard/userProfile'>Dashboard</Link> </li>
       
                <li>
                    <button onClick={logOut} className="btn btn-sm  btn-ghost"  
                    >Logout</button>

                </li>
            </ul>
        </div>

       </li>

    </>


    return (
       <div className=' shadow-md'>
         <div className="flex px-10 max-w-7xl mx-auto   bg-[#FFFFFF] items-center flex-col lg:flex-row py-3 lg:py-4 justify-between">


<div className="navbar-start flex items-center">
    <div className="dropdown ">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="text-sm font-inter font-medium  menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            
            {

          user? navLinks : navlinksBeforeLogin
            }

        </ul>
    </div>
 
    <div className=''>
        <img className="w-[100px]" src="https://hive.com/wp-content/uploads/2022/05/Colored-Logo.svg"></img>
    </div>

</div>

<div className="flex justify-center">
    <ul className="hidden text-sm font-inter font-medium lg:flex justify-center items-center text-[#0B0B0B]  flex-col lg:flex-row gap-1 lg:gap-8  font-Inter">


        {
       user? navLinks : navlinksBeforeLogin
        }

        {/* <NavLink to="/addProduct" className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
}><li>Add Product</li></NavLink>

<NavLink to="/myCart" className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-[#FF444A]  underline" : ""
}><li>My Cart</li></NavLink> */}




    </ul>
</div>



</div>

       </div>
    );
};

export default Navbar;