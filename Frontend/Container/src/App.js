import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import header from './components/Header';
import Header from './components/Header';
// hi there
export default () => {
  return (
    <BrowserRouter>
    <div>
      <Header/>
      <MarketingApp />
    </div>
    </BrowserRouter>
  );
};
