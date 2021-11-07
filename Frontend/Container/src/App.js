import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import { StylesProvider,createGenerateClassName } from '@material-ui/styles';
import Header from './components/Header';

const generateClassName=createGenerateClassName({
  productionPrefix:'co'
});
// hi there
export default () => {
  return (
    <BrowserRouter>
    <StylesProvider>
    <div>
      <Header/>
      <MarketingApp />
    </div>
    </StylesProvider>
    </BrowserRouter>
  );
};
