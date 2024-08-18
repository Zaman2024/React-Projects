
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../Context/UserContext";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const { setUser } = useContext(UserContext);

  const handleSubmit = e => {
    e.preventDefault();
    setUser ({ username, password });
    setUsername('');
    setPassword('');
  };

  return (
    <div className="flex flex-col justify-center items-center m-auto  bg-slate-900 text-white">
      <h1>Authentication</h1>
      <div className="flex gap-2 mt-5">
      <div className="flex gap-2">
        <h1>Login : </h1>
        <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
            className="px-2 rounded-md text-black"
        />
      </div>
      <div>
        <input
            type="text"
            value={password}
            onChange={e => setPassword (e.target.value)}
            placeholder="Password"
            className="px-2 rounded-md text-black"
        />
        </div>
      </div>
      <div>
        <button 
            onClick={handleSubmit}
            className="bg-green-700 rounded-lg px-2 mt-5 border-2 border-black "
        >
            Submit
        </button>
        
      </div>
    </div>
  );
}
export default Login;


