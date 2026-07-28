import { createContext, useState, useContext, useEffect } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {

  const [dark, setDark] = useState(() => {
    const storedDark = localStorage.getItem('dark');
    return storedDark ? JSON.parse(storedDark) : false;
  });

  useEffect(() => { 
    localStorage.setItem('dark', JSON.stringify(dark));
    document.body.classList.toggle('dark', dark);
  }, [dark]);

  const toggleDarkMode = () => {
    setDark(prev => !prev);
  };
  
  return (
    <DarkModeContext.Provider
      value={{
        dark, toggleDarkMode
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDarkMode = () => useContext(DarkModeContext);