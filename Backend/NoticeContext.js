import React, { createContext, useState } from 'react';

const NoticeContext = createContext();

const NoticeProvider = ({ children }) => {
  const [notices, setNotices] = useState([]);

  const addNotice = (noticeData) => {
    setNotices([...notices, noticeData]);
  };

  return (
    <NoticeContext.Provider value={{ notices, addNotice }}>
      {children}
    </NoticeContext.Provider>
  );
};

export { NoticeContext, NoticeProvider };
