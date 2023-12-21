import { useContext } from "react";
import { AuthContext } from "../components/Authprovider/Authprovider";


const UseAuth = () => {

    const auth = useContext(AuthContext) ;

    return auth ;
};

export default UseAuth;