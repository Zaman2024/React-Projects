import { useState, useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './ContextAPI/ThemeContext'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'

function App() {
  const [themeMode, setThemeMode] = useState('light')

    const lightTheme = () => {
      setThemeMode('light')
    }
    const darkTheme = () => {
      setThemeMode('dark')
    }

    useEffect( () =>{
      document.querySelector('html').classList.remove('light', 'dark');
      document.querySelector('html').classList.add(themeMode)
    }, [themeMode])

  return (
    <ThemeProvider value={ {themeMode, lightTheme, darkTheme}}>
      <div>
      <div>
        <ThemeBtn/>
      </div>
        <Card/>
      </div>

    </ThemeProvider>
  )
}

export default App
