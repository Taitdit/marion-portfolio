import { createContext, useState, useContext, useEffect } from "react";

const MenuHeaderContext = createContext();

export const MenuHeaderProvider = ({ children }) => {

  const [open, setOpen] = useState(false);

  useEffect(() => { 
    document.documentElement.classList.toggle('open', open);
  }, [open]);

  const toggleMenu = () => {
    setOpen(prev => !prev);
  };
  
  return (
    <MenuHeaderContext.Provider
      value={{
        open, toggleMenu
      }}
    >
      {children}
    </MenuHeaderContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMenuHeader = () => useContext(MenuHeaderContext);