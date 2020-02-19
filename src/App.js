import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoadingOverlay } from './assets/Loading';

// Lazy Load imports.
const CreateNewGame = lazy(() => import('./components/games/CreateNewGame'));

export const App = () => {
  return (
    <Suspense fallback={<LoadingOverlay />}>
      <Switch>
        <Route exact path='/' render={() => <h1>Hello DiceTrax!</h1>} />
        <Route path='/new-game' component={CreateNewGame} />
      </Switch>
    </Suspense>
  );
};
