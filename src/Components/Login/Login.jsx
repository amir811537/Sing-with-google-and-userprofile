import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthConatext } from "../provider/Authprovider";

const Login = () => {
  const {singinUser,singinwithGoogle}=useContext(AuthConatext);
  const navigate=useNavigate()
  
  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    singinUser(email,password)
    .then(result=>{
      console.log(result.user)
      e.target.reset();
      navigate('/')
    })
    .catch(error=>{
      console.error(error)
    })
  };
  const handelGooglesingin=()=>{
singinwithGoogle()
.then(result=>{
  navigate('/home')
  console.log(result.user)
})
.catch(error =>{
  console.error(error)
})
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
        
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handelLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center">Are you new user?<Link to="/register">
          <button className="btn btn-link"> plase register  </button>
          </Link> </p>
          <p> 
          <button onClick={handelGooglesingin} className="btn btn-ghost">Login with Google</button>

          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
