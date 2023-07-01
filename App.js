import React from 'react';
import AppNavigator from './AppNavigator';
import { NoticeProvider } from './Backend/NoticeContext';
import { EventProvider } from './Backend/EventContext';
import './Backend/FirebaseConfig'
const App = () => {
  return (
    <NoticeProvider>
      <EventProvider>
      <AppNavigator />
      </EventProvider>
     </NoticeProvider>
  );
};

export default App;
