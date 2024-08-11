import React, { useState, useEffect } from "react";

function Card() {
  const [image, setImage] = useState("");

  useEffect(() => {
    // fetch("https://api.github.com/users/Zaman2024")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setImage(json.avatar_url);
    //   })
    //   .catch(() => {
    //     alert('Error occured when fetching Images');
    //   })
//------------- Fetching data by using async/await Method-1 -------
    // (async () => {
    //   try {
    //     const response = await fetch("https://api.github.com/users/Zaman2024")
    //     const data =await response.json()
    //     setImage(data.avatar_url);
    //   } catch (err) {
    //     alert('Error occured when fetching image');
    //   }
    // })();
//------------Fetching Method 2 ----------------
    async function fetchData() {
      try {
        const response = await fetch('https://api.github.com/users/Zaman2024')
        const data = await response.json()
        setImage(data.avatar_url)
        console.log(data.id)
      } catch (error) {
        alert('Error')
      }
    }
    
   fetchData() 

  }, []);

  return (
    <div className="dark:bg-slate-900 w-full h-screen pt-8">
      <div className="flex flex-col justify-center items-center m-auto border-2 dark:bg-slate-800 border-black w-1/5 dark:border-slate-200 dark:text-white dark:border-5 rounded-lg">
        <h2 className="text-center m-auto pt-6 text-lg font-semibold italic">
          This is my Card
        </h2>
        <div className="w-full rounded-lg p-6">
          <img
            src={`${image}`}
            alt="Image"
            className="rounded-lg border-2 border-black dark:border-none w-60 h-auto"
          />
        </div>
        <div>
          <h1>I am a passionate Web Developer</h1>
        </div>
      </div>
    </div>
  );
}

export default Card;
