import React, { createContext, useContext, useState } from 'react';

const NavbarContext = createContext();

export const useNavbar = () => useContext(NavbarContext);

export const NavbarProvider = ({ children }) => {
    const [colorText, setColorText] = useState('');
    
    return (
        <NavbarContext.Provider value={{ colorText, setColorText }}>
          {children}
        </NavbarContext.Provider>
  );
};
