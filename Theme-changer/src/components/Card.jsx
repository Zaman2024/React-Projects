import React, {useState,useEffect} from 'react'

function Card() {
    const [image, setImage] = useState('')

useEffect( () => {

    fetch ('https://api.github.com/users/Zaman2024')
    .then (res => res.json())
    .then (res => {
        setImage(res.avatar_url)
    })
})

  return (
    <div className='flex flex-col justify-center items-center m-auto border-2 border-black w-1/3 p-5 rounded-lg'>
        <div>
            <img src={image} alt='Image'/>
        </div>
        <div>
            <h1>This is a practice of Context Api</h1>
        </div>
      
    </div>
  )
}

export default Card
