import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import { Input, InputWithDatalist } from '../../shared-components';
import { Form, DiceButton, GeneralButton } from '../../lib/styles';

export const CreateNewGame = ({ submitHandler }) => {
  const [diceType, setDiceType] = useState(null);
  const { handleSubmit, register, errors, reset } = useForm({
    mode: 'onChange',
  });

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
    <Form onSubmit={handleSubmit(submitHandler)} data-testid='form'>
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
      <DiceContainer>
        <DiceButton
          label='Prickar'
          activeClass={diceType === 'dots' ? true : false}
          icon='dice-five'
          onClick={() => setDiceType('dots')}
        />
        <DiceButton
          label='Siffror'
          activeClass={diceType === 'numbers' ? true : false}
          icon='dice-five'
          onClick={() => setDiceType('numbers')}
        />
      </DiceContainer>
      <GeneralButton type='submit'>Starta spel</GeneralButton>
    </Form>
  );
};

const DiceContainer = styled.article`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;
