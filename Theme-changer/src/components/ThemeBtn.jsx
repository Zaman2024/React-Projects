import React from 'react'
import useTheme from '../ContextAPI/ThemeContext'

export default function ThemeBtn() {
    const {themeMode, lightTheme, darkTheme} = useTheme();

    const onThemeChange = (e) => {
        const darkThemeStatus = e.currentTarget.checked;
        if(darkThemeStatus) {
            darkTheme()
        }else {
            lightTheme()
        }
    }



  return (
    <label className="relative inline-flex items-center cursor-pointer">
        <input
            type='checkbox'
            value='light'
            onChange={onThemeChange}
            checked ={themeMode === 'dark'}
            className='sr-only peer'
        />
        <div className="w-14 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[165%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className=' text-sm font-medium text-gray-900'></span>
    </label>
  );
}


