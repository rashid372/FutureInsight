import React ,{lazy,Suspense,useState} from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import { StylesProvider,createGenerateClassName } from '@material-ui/styles';

import Header from './components/Header';
import Progress from './components/Progress';
const AuthAppLazy=lazy( () => import('./components/AuthApp'));
const MarketingAppLazy=lazy(() => import('./components/MarketingApp'));

const generateClassName=createGenerateClassName({
  productionPrefix:'co'
});
// hi there
export default () => {
  const[isSignedIn,setIsSignedIn]=useState(false);
  return (
    <BrowserRouter>
    <StylesProvider>
    <div>
      <Header isSignedIn={isSignedIn} onSignOut={() => {setIsSignedIn(false)}} />
      <Suspense fallback={ <Progress/> }> 
     <switch>
       <Route path="/auth">
         <AuthAppLazy onSignIn={()=>{setIsSignedIn(true)}} />
         </Route>
       <Route path="/" component={MarketingAppLazy}/>
     </switch>
     </Suspense>
    </div>
    </StylesProvider>
    </BrowserRouter>
  );
};
