import React, { createContext, useContext } from 'react';

interface Type {
  currentMode: string;
  currentColor: string;
  activeMenu: boolean;
  themeSettings: boolean;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentMode: React.Dispatch<React.SetStateAction<string>>;
  setThemeSettings: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentColor: React.Dispatch<React.SetStateAction<string>>;
  setMode: (e: any) => void;
  setColor: (color: any) => void;
}

const StateContext = createContext({} as Type);

export const ContextProvider = ({ children }: any) => {
  const [currentMode, setCurrentMode] = React.useState('Light');
  const [currentColor, setCurrentColor] = React.useState('#03C9D7');
  const [themeSettings, setThemeSettings] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState(true);

  const setMode = (e: any) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color: any) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        currentMode,
        setCurrentMode,
        themeSettings,
        setThemeSettings,
        currentColor,
        setCurrentColor,
        setMode,
        setColor,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
