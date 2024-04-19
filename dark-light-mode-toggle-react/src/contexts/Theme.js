import { createContext } from "react"
import React, { useContext } from "react"

export const ThemeContext = createContext({
  themeMode: "light",
  DarkThemeMode: () => { },
  LightThemeMode: () => { }
})

export const ThemeProvider = ThemeContext.Provider

export const useTheme = () => {
  return useContext(ThemeContext)
}
