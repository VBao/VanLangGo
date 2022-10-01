import * as React from 'react';
import { AppShell, ScrollArea } from '@mantine/core';
import { useStateContext } from '~/contexts/ContextProvider';
import { Siderbar } from './Sidebar';
export function DefaultLayout({ children }: any) {
  const { activeMenu } = useStateContext();

  const CustomNavBar = activeMenu ? (
    <div className='w-20 dark:bg-secondary-dark-bg'>
      <Siderbar />
    </div>
  ) : (
    <div
      className={
        activeMenu
          ? 'dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full  '
          : 'bg-main-bg dark:bg-main-dark-bg w-full min-h-screen flex-2 '
      }
    >
      <Siderbar />
    </div>
  );

  return (
    <AppShell padding='md' navbar={CustomNavBar} className='overflow-hidden theme'>
      <ScrollArea className='bg-white dark:text-gray-200 dark:bg-white rounded-xl w-full p-4 bg-hero-pattern bg-no-repeat bg-cover bg-center shadow-xl font-body '>
        {children}
      </ScrollArea>
    </AppShell>
  );
}
