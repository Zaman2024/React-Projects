import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

function Loging() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };
  return (
    <div className="flex flex-col justify-center items-center m-auto w-full h-screen bg-slate-900 text-white">
      <h1>Authentication</h1>
      <div className="flex gap-2">
      <div>
        <input
            type="text"
        />
      </div>
      <div>
      <input
            type="text"
        />
      </div>
      </div>
    </div>
  );
}

export default Loging;
