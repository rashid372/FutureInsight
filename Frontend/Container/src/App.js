import React from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import { StylesProvider,createGenerateClassName } from '@material-ui/styles';
import Header from './components/Header';
import AuthApp from './components/AuthApp';

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
     <switch>
       <Route path="/auth" component={AuthApp} />
       <Route path="/" component={MarketingApp}/>
     </switch>
    </div>
    </StylesProvider>
    </BrowserRouter>
  );
};
