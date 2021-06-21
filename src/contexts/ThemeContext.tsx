import { parseCookies, setCookie } from 'nookies'
import React, {createContext, useCallback, useState, useContext, useEffect} from 'react'

import { ThemeProvider as StyledProvider, DefaultTheme } from 'styled-components'

import dark from '../styles/themes/dark'
import light from '../styles/themes/light'


interface ThemeContextData {
    theme: DefaultTheme,
    toggleTheme():void
}

export const ThemeContext = createContext({} as ThemeContextData)

export const ThemeProvider:React.FC = ({children}) => {

    const [theme, setTheme] = useState<DefaultTheme>(()=>{
        /* const { 'perfit.theme': storagedTheme }= parseCookies()

        if(storagedTheme) {
            console.log('initial state', JSON.parse(storagedTheme))
            return JSON.parse(storagedTheme)
        } */

        return dark
    })

    const toggleTheme = useCallback(()=>{
        setTheme(state => state.title === 'dark' ? light : dark)
    },[])

    /* useEffect(()=>{
        console.log('useEffect',theme)
        setCookie(undefined, 'perfit.theme', JSON.stringify(theme), {
            maxAge: 60 * 60 * 24 * 30, // 30 days
            path: '/'
        })
    },[theme]) */

    return(
        <StyledProvider theme={theme as DefaultTheme}>
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                {children}          
            </ThemeContext.Provider>
        </StyledProvider>
    )
}

export function useTheme(): ThemeContextData {
    const context = useContext(ThemeContext)

    if(!context){
        throw new Error('useTheme must be used within an ThemeProvider')
    }

    return context
}