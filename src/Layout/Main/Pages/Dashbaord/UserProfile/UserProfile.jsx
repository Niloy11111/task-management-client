import UseAuth from "../../../../../Hooks/UseAuth";




const UserProfile = () => {
    const {user} = UseAuth() ;
   

    return (
        <div className="flex items-center justify-evenly border p-8">
      
            <img className="w-[240px] rounded-full" src={user?.photoURL}></img>
          
       

          <div>
          <h2 className="text-2xl text-center font-bold font-serif ">{user?.displayName}</h2>
            <h2 className="text-2xl font-bold font-serif ">{user?.email}</h2>
          </div>
    
        </div>
    );
};

export default UserProfile;