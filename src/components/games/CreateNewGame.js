import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Input, InputWithDatalist } from '../../shared-components';
import { Form, DiceButton } from '../../lib/styles';

export const CreateNewGame = (props) => {
  const [diceType, setDiceType] = useState(null);
  const { handleSubmit, register, errors, reset } = useForm({
    mode: 'onChange',
  });

  const createNewGame = (data) => {
    console.log(data);
    reset({
      title: '',
      gameType: '',
      diceNumber: '',
    });
  };
  const dataSource = [
    'Settlers',
    'Catan',
    'Pandemic',
    'Ticket to Ride',
    'Risk',
    'Yatzy',
    'Dungeon and Dragons',
  ];

  useEffect(() => {}, [diceType]);

  return (
    <Form onSubmit={handleSubmit(createNewGame)}>
      <Input
        type='text'
        name='title'
        label='Titel'
        ref={register({ required: true })}
        error={errors.title}
      />
      <InputWithDatalist
        type='text'
        name='gameType'
        label='Ange spel'
        ref={register({ required: true })}
        error={errors.gameType}
        listArray={dataSource}
      />
      <Input
        type='text'
        name='diceNumber'
        label='Antal tärningar'
        ref={register({
          required: true,
          pattern: { value: /^[0-9]$/, message: 'Måste vara en siffra' },
        })}
        error={errors.diceNumber}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 auto;' }}>
        <DiceButton
          label='Prickar'
          type='button'
          activeClass={diceType === 'dots' ? true : false}
          icon='dice-five'
          onClick={() => setDiceType('dots')}
        />
        <DiceButton
          label='Siffror'
          type='button'
          activeClass={diceType === 'numbers' ? true : false}
          icon='dice-five'
          onClick={() => setDiceType('numbers')}
        />
      </div>
      <button type='submit'>Skapa spel</button>
    </Form>
  );
};
