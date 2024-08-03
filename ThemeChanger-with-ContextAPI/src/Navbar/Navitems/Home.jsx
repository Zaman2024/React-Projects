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
    <div className='flex flex-col justify-center items-center m-auto border-2 border-black w-1/3 rounded-lg'>
    <h2 className='text-center m-auto pt-6 text-lg font-semibold italic'>This is my Card</h2>
        <div 
          className='w-full rounded-lg p-6'
        >
            <img src={`${image}`}
                 alt='Image'
                 className='rounded-lg border-2 border-black'
                 /> 
        </div>
        <div>
            <h1>I am a passionate Web Developer</h1>
        </div>
    </div>
      
    </>
  )
}

export default Home
