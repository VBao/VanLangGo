import { Tooltip } from '@mantine/core';
import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '~/components/layout/DefaultLayout';
import { ThemeSetting } from './components/common';
import { NoneLayout } from './components/layout/NoneLayout';
import { publicRouters } from './config/ProtectedRoute';
import { useStateContext } from './contexts/ContextProvider';
import { NotFound } from './Pages';
function App() {
  const {
    setCurrentColor,
    setCurrentMode,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  React.useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <div className='dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4 z-50'>
          <Tooltip label='Customs Setting'>
            <button
              type='button'
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: '50%' }}
              className='text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray'
            >
              <FiSettings />
            </button>
          </Tooltip>
        </div>
        {themeSettings && <ThemeSetting />}
        <Routes>
          {publicRouters?.map((route, index) => {
            const Page = route.component;
            const Layout = DefaultLayout;
            const NoLayout = NoneLayout;
            console.log();
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  route.layout === null ? (
                    <NoLayout>
                      <Page />
                    </NoLayout>
                  ) : (
                    <Layout>
                      <Page />
                    </Layout>
                  )
                }
              />
            );
          })}

          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
