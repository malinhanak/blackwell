import React, { lazy, Suspense } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { LoadingOverlay } from './assets/Loading';

// Lazy Load imports.
const Home = () => <h1>Welcome!</h1>;
const About = () => <h3>You are on about page</h3>;
const Horses = () => <h3>You are on horse page</h3>;
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
