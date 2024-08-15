import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = e => {
    e.preventDefault();

    setUser({ userName, password });

    console.log('Btn Clicked')

  };

  return (
    <div className="flex flex-col justify-center items-center m-auto w-full h-screen bg-slate-900 text-white">
      <h1>Authentication</h1>
      <div className="flex gap-2 mt-5">
      <div className="flex gap-2">
        <h1>Loging : </h1>
        <input
            type="text"
            value={userName}
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
            className="px-2 rounded-md text-black"
        />
      </div>
      <div>
        <input
            type="text"
            value={password}
            onChange={e => setPassword(e.target.value)}
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
