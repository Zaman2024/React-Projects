import React,{useState, useEffect} from 'react'

function Home() {
  const [image, setImage] =useState('')

  useEffect(() => {
    fetch('https://api.github.com/users/Zaman2024')
        .then(response => response.json())
        .then(json => {
          setImage(json.avatar_url)
        })
}, []);

  return (
    <>
    <div className='flex flex-col justify-center items-center m-auto border w-1/3 rounded-lg'>
        <div 
          className=''
        >
            <img src={`${image}`} alt='Image'/> 
        </div>
        <div>
            <h1>I am a passionate Web Developer</h1>
        </div>
    </div>
      
    </>
  )
}

export default Home
