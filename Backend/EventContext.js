import React, { createContext, useState } from 'react';

const EventContext = createContext();

const EventProvider = ({ children }) => {
  const [event, setEvent] = useState([]);

  const addEvent = (eventData) => {
    setEvent([...event, eventData]);
  };

  return (
    <EventContext.Provider value={{ event, addEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export { EventContext, EventProvider };