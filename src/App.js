import React, { lazy, Suspense } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { LoadingOverlay } from './assets/Loading';

// Lazy Load imports.
const CreateNewGame = lazy(() => import('./components/games/CreateNewGame'));

function App() {
  return (
    <Suspense fallback={<LoadingOverlay />}>
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <div>
              <nav>
                <Link to='/new-game'>Nytt spel</Link>
              </nav>
              <h1 data-testid='headline'>Hello DiceTrax!</h1>
            </div>
          )}
        />
        <Route path='/new-game' component={CreateNewGame} />
        <Route render={() => <h1>404 page</h1>} />
      </Switch>
    </Suspense>
  );
}

export default App;
