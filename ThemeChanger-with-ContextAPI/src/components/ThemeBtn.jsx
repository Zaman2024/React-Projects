import React from 'react'
import useTheme from '../ComtextAPI/ThemeContext'

function ThemeBtn() {
    const {themeMode, darkMode, lightMode}= useTheme()

    const onBtnChange = (e) =>{
        const darkModeStatus = e.currentTarget.checked;
        if(darkModeStatus){
            darkMode()
        }else{
            lightMode()
        }
    }

  return (
    <label>
        <input 
            type="checkbox"
            value={'light'}
            className='sr-only peer'
            onChange={onBtnChange}
        />
      <span>
        ThemeToggler
      </span>
    </label>
  )
}

export default ThemeBtn
