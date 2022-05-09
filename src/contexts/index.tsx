import React from 'react';
import { AuthProvider } from './AuthContext';

export const AppProvider: React.FC = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
