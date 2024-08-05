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
            checked = {themeMode === 'dark'}
        />
      <div className="w-16 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ml-1 text-sm font-medium text-gray-900">
      </span>
    </label>
  )
}

export default ThemeBtn
