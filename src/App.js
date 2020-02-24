import React, { lazy, Suspense, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoadingOverlay } from './assets/Loading';
import { Menu } from './lib/styles/Nav';
import { Navigation } from './lib/styles/Navigation';

// Lazy Load imports.
const Home = lazy(() => import('./views/Home'));
const About = lazy(() => import('./views/About'));
const Horses = lazy(() => import('./views/Horses'));
const Layout = ({ children }) => {
  return (
    <>
      <Menu letter='W' />
      <Navigation />
      {children}
    </>
  );
};

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingOverlay />}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/horses' component={Horses} />
          <Route render={() => <h1>404 page</h1>} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
