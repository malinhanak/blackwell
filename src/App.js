import React, { lazy, Suspense } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { LoadingOverlay } from './assets/Loading';

// Lazy Load imports.
const CreateNewGame = lazy(() => import('./components/games/CreateNewGame'));
const Home = lazy(() => (
  <div>
    <nav>
      <Link to='/new-game'>Nytt spel</Link>
    </nav>
    <h1 data-testid='headline'>Hello DiceTrax!</h1>
  </div>
));
const About = lazy(() => <h3>You are on about page</h3>);
const Horses = lazy(() => <h3>You are on horse page</h3>);

function App() {
  return (
    <Suspense fallback={<LoadingOverlay />}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/horses' component={Horses} />
        <Route render={() => <h1>404 page</h1>} />
      </Switch>
    </Suspense>
  );
}

export default App;
