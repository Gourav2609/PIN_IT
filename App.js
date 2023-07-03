//App.js

import React from 'react';
import AppNavigator from './AppNavigator';
import { EventProvider } from './Backend/EventContext';
import './Backend/FirebaseConfig'
const App = () => {
  return (
    
      <EventProvider>
      <AppNavigator />
      </EventProvider>
  );
};

export default App;
