import React, { useContext } from 'react'
import { ThemeContext } from '../App'
const Main = () => {
    const theme = useContext(ThemeContext);
    return (
        <div className={theme}>
            <h1>Theme</h1>
        </div>
    )
}

export default Main;