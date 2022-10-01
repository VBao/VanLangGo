import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Hook
import { ModalsProvider } from '@mantine/modals';

// Thư viện
import { BrowserRouter as Router } from 'react-router-dom';
import { NotificationsProvider } from '@mantine/notifications';
import { MantineProvider } from '@mantine/core';
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <MantineProvider>
          <NotificationsProvider>
            <ModalsProvider>
              <App />
            </ModalsProvider>
          </NotificationsProvider>
        </MantineProvider>
      </Router>
    </ContextProvider>
  </React.StrictMode>,
);
