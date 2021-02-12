import React, { useState } from 'react'
import Main from './components/Main'
import './App.css';

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }

  return (
    <ThemeContext.Provider value={theme}
    >
      <button onClick={toggleTheme}>Change Theme</button>
      <Main />
    </ThemeContext.Provider>
  );
}

export default App;
