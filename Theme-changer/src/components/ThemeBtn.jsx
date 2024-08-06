import React from 'react'
import useTheme from '../ContextAPI/ThemeContext'

function ThemeBtn() {
    const {themeMode, lightTheme, darkTheme} = useTheme();

  return (
    <label>
        <input
            type='checkbox'
        />
      
    </label>
  )
}

export default ThemeBtn
