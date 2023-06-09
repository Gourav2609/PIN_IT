import React from 'react';
import AppNavigator from './AppNavigator';
import { NoticeProvider } from './Backend/NoticeContext';

const App = () => {
  return (
    <NoticeProvider>
      <AppNavigator />
    </NoticeProvider>
  );
};

export default App;
