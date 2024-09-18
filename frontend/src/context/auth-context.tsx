import { User } from '@/lib/utils';
import React, { createContext, useState, useEffect } from 'react';

interface IAuthContext {
  isAuthenticated: boolean;
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<IAuthContext>({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  // Implement your authentication logic here, such as checking for a token or fetching user data
  useEffect(() => {
    // Check for authentication token or fetch user data
    // mocking this meanwhile as auth is out of scope for current project
    login(user as User);
  }, []);

  const login = (user: User) => {
    // Store the user information (e.g., in local storage or a secure store)
    setIsAuthenticated(true);
    setUser(user);
  };

  const logout = () => {
    // Clear user information and authentication state
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };