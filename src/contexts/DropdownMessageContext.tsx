import React, { createContext, useContext, useRef } from 'react';
import DropdownAlert, { DropdownAlertType } from 'react-native-dropdownalert';

const DropdownContext = createContext(null);

export const DropdownMessageProvider: React.FC = ({ children }) => {
  const ref = useRef<DropdownAlertType>();

  return (
    <DropdownContext.Provider value={{ ref }}>
      {children}
      <DropdownAlert ref={ref} />
    </DropdownContext.Provider>
  );
};

export const useDropdownMessage = () => useContext(DropdownContext);
