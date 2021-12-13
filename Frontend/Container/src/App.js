import React ,{lazy,Suspense,useState} from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
// import { StylesProvider,createGenerateClassName } from '@material-ui/styles';
import { ProgressIndicator, styled } from "@fluentui/react";
import { get, isArray, isNil, flattenDeep } from "lodash";

import { AutoSwitchLayout } from "./components/layout";
import {
  AuthorizedRoute,
  RouteIndexList,
  ComingSoon,
  NoMatch,
} from "./components/route";
import { hierarchize } from "./global/hierarchical";
import routes from "./routes";

const keyName = "key";
const pathName = "path";
const uniqueKeyName = "uniqueKey";

function generateRoutePath(node, parent) {
  const parentUniqueKey = get(parent, uniqueKeyName);
  const uniqueKey = parentUniqueKey
    ? parentUniqueKey + "." + node[keyName]
    : node[keyName];

  const parentPath = get(parent, pathName, "");
  const routePath = get(node, pathName, parentPath+ node[keyName]);
  node[uniqueKeyName] = uniqueKey;
  node[pathName] = routePath;
}
function renderRoute(route) {
  const isGroup = isArray(route.children);
  const PageComponent = isNil(route.component)
    ? isGroup
      ? RouteIndexList
      : ComingSoon
    : route.component;

  const routeComponent = (
    <AuthorizedRoute
      key={route.uniqueKey}
      path={route.path}
      exact={route.exact || isArray(route.children)}
      strict={route.strict}
      isPublic={route.isPublic}
    >
      <PageComponent route={route} />
    </AuthorizedRoute>
  );

  const childComponents = isGroup ? route.children.map(renderRoute) : [];
  return [routeComponent, ...childComponents];
}

import Header from './components/Header';
import Progress from './components/Progress';
const AuthAppLazy=lazy( () => import('./components/AuthApp'));
const MarketingAppLazy=lazy(() => import('./components/MarketingApp'));

// const generateClassName=createGenerateClassName({
//   productionPrefix:'co'
// });
// hi there
// export default () => {
//   const[isSignedIn,setIsSignedIn]=useState(false);
//   return (
//     <BrowserRouter>
//     <StylesProvider>
//     <div>
//       <Header isSignedIn={isSignedIn} onSignOut={() => {setIsSignedIn(false)}} />
//       <Suspense fallback={ <Progress/> }> 
//      <switch>
//        <Route path="/auth">
//          <AuthAppLazy onSignIn={()=>{setIsSignedIn(true)}} />
//          </Route>
//        <Route path="/" component={MarketingAppLazy}/>
//      </switch>
//      </Suspense>
//     </div>
//     </StylesProvider>
//     </BrowserRouter>
//   );
// };
function App({ theme }) {
  const { semanticColors } = theme;
  React.useLayoutEffect(() => {
    document.body.style.backgroundColor = semanticColors.bodyBackground;
    document.body.style.color = semanticColors.bodyText;
  }, [semanticColors]);

  const routeList = hierarchize(routes, null, generateRoutePath);

  const routeComponents = renderRoute(routeList);
  const flatRouteComponents = flattenDeep(routeComponents);

  return (
    <Router >
      <AutoSwitchLayout>
        <Suspense fallback={<ProgressIndicator label="Page loading..." />}>
          <Switch>
            {flatRouteComponents}
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Suspense>
      </AutoSwitchLayout>
    </Router>
  );
}

export default styled(App);