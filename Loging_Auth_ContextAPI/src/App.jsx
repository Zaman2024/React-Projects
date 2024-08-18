import { useState } from "react";
import UserContextProvider from "./Context/UserContextProvider";
import Profile from "./Components/Profile";
import Login from "./Components/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <div className="flex flex-col justify-center items-center m-auto  bg-slate-900 text-white w-full h-screen">
        <div>
          <Login />
        </div>
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
