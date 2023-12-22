import UseAuth from "../../../../../Hooks/UseAuth";




const UserProfile = () => {
    const {user} = UseAuth() ;
   

    return (
        <div className="flex lg:flex-row flex-col items-center justify-evenly border p-8 gap-5 lg:gap-10 mx-10">
      
            <img className="lg:w-[240px] rounded-full" src={user?.photoURL}></img>
          
       

          <div>
          <h2 className="text-lg lg:text-2xl text-center font-bold font-serif ">{user?.displayName}</h2>
            <h2 className="text-xl lg:text-2xl font-bold font-serif ">{user?.email}</h2>
          </div>
    
        </div>
    );
};

export default UserProfile;