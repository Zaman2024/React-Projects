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
    <label className="relative inline-flex items-center cursor-pointer">
        <input
            type='checkbox'
            value={themeMode}
            onChange={onThemeChange}
            checked ={themeMode === 'dark'}
            className='sr-only peer'
        />
        <div className='w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-grey-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600'></div>
        {/* <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div> */}
        <span className=' text-sm font-medium text-gray-900'>toggler</span>
      
    </label>
  )
}

export default ThemeBtn
