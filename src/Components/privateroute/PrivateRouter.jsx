import { useContext } from "react";
import { AuthConatext } from "../provider/Authprovider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRouter = ({children}) => {
    const{user,loading} =useContext(AuthConatext)
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>;
    }
    if(user){
        return children;
    }



    return <Navigate to='/login'></Navigate>;
};

export default PrivateRouter;

PrivateRouter.propTypes = {
    children: PropTypes.node,
  };