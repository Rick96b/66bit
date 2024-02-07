import { useEffect, useState } from "react";
import { ThemeContext } from "shared/theme/themeContext";

type Theme = 'light' | 'dark'

export const withTheme = (component: () => React.ReactNode) => () => {
    const [theme, setTheme] = useState<Theme>(localStorage.getItem('theme-name') as Theme || 'light')

    const handleChangeTheme = (newTheme: 'dark' | 'light') => {
        setTheme(newTheme)
        localStorage.setItem('theme-name', newTheme)
        document.documentElement.setAttribute('data-theme', newTheme);
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [])

    return (
        <ThemeContext.Provider value={{setTheme: handleChangeTheme, theme:theme}}>
            {component()}
        </ThemeContext.Provider>
    )
};