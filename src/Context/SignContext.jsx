import React, { createContext, useContext, useState } from 'react';

const SignContext = createContext();

export const useSign = () => useContext(SignContext);

export const SignProvider = ({ children }) => {
  const [signUp, setSignUp] = useState(false);

  return (
    <SignContext.Provider value={{ signUp, setSignUp }}>
        {children}
    </SignContext.Provider>
  );
};
