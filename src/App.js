import React, { lazy, Suspense } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { LoadingOverlay } from './assets/Loading';

// Lazy Load imports.
const Home = lazy(() => import('./views/Home'));
const About = lazy(() => import('./views/About'));
const Horses = lazy(() => import('./views/Horses'));
const Layout = ({ children }) => (
  <>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/horses'>Horses</Link>
    </nav>
    {children}
  </>
);

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
