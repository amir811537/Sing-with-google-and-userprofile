import { useContext } from "react";
import { AuthConatext } from "../provider/Authprovider";


const Home = () => {

    const authinfo = useContext(AuthConatext)
    console.log(authinfo)
    return (
        <div>
           <h2 className="text-5xl">this is home </h2>
        </div>
    );
};

export default Home;