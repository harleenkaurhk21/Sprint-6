import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Load login status from localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const savedStatus = localStorage.getItem("isLoggedIn");
    return savedStatus ? JSON.parse(savedStatus) : false;
  });

  // Save login status whenever it changes
  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  // Login as Guest
  const login = () => {
    setIsLoggedIn(true);
  };

  // Logout
  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook
export const useAuth = () => useContext(AuthContext);