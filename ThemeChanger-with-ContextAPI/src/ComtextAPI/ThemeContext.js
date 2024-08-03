import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    ThemeMode : 'light',
    Dark : () =>{},
    Light: () => {}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext)
}

