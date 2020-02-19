import React from 'react';
import { CreateNewGame } from './components/games';

export const App = () => {
  const createNewGame = (data) => console.log(data);

  return (
    <>
      <h1>Hello DiceTrax!</h1>
      <CreateNewGame submitHandler={createNewGame} />
    </>
  );
};
