import React from 'react'
import useTheme from '../ContextAPI/ThemeContext'

function ThemeBtn() {
    const {themeMode, lightTheme, darkTheme} = useTheme();

    const onThemeChange = (e) => {
        const darkThemeStatus = e.currentStatus.checked;
        if(darkThemeStatus) {
            darkTheme()
        }else {
            lightTheme()
        }
    }

  return (
    <label>
        <input
            type='checkbox'
            value={themeMode}
            onChange={onThemeChange}
            checked ={themeMode === 'dark'}
            className='sr-only peer'
        />
        <div className='w-16 h-6 bg-slate-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 peer-focus:dark:ring-blue-800 rounded-full peer dark:bg-gray-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-grey-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600'></div>
        <span>toggler</span>
      
    </label>
  )
}

export default ThemeBtn
