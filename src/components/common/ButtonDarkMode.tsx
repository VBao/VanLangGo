import * as React from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';
import { useTheme } from '~/contexts/ThemeContext';

export function ButtonDarkMode() {
  const { theme, setTheme } = useTheme();

  function handleToggleTheme() {
    setTheme(!theme);
  }
  return (
    <div className='rounded-full fixed bottom-4 right-4 bg-slate-700 hover:bg-slate-900 p-3 duration-300'>
      {theme ? (
        <BiMoon size={32} className='cursor-pointer' onClick={handleToggleTheme} color='white' />
      ) : (
        <BiSun size={32} className='cursor-pointer' onClick={handleToggleTheme} color='white' />
      )}
    </div>
  );
}
