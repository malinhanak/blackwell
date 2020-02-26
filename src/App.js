import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoadingOverlay } from './assets/Loading';
import { Layout } from './lib/styles';
import { FirebaseContext, MenuProvider } from './helpers/context';
import { useAuth } from './helpers/hooks';
import { firebase } from './firebase';

// Lazy Load imports.
const Home = lazy(() => import('./views/Home'));
const About = lazy(() => import('./views/About'));
const Horses = lazy(() => import('./views/Horses'));
const Login = lazy(() => import('./views/Login'));
const Horse = lazy(() => import('./views/Horse'));

function App() {
  const user = useAuth();
  return (
    <FirebaseContext.Provider value={{ user, firebase }}>
      <MenuProvider>
        <Layout>
          <Suspense fallback={<LoadingOverlay />}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/horses' component={Horses} />
              <Route path='/login' component={Login} />
              <Route path='/horse/1' component={Horse} />
              <Route render={() => <h1>404 page</h1>} />
            </Switch>
          </Suspense>
        </Layout>
      </MenuProvider>
    </FirebaseContext.Provider>
  );
}

export default App;
