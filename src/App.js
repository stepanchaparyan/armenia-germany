import React, { useEffect, useState } from 'react';
import useCounter from './hooks/useCounter';
import CountdownTimer from './CountdownTimer';
import Box from './components/Box';
import { Container, Title, InputStyled, ButtonsContainer, ButtonStyled } from './App.styled';

export default function App() {
  const { counter, setCounter, startCountDown, pauseCountDown, stopCountDown, resetStartValue, isStarted, isPaused } = useCounter();
  const [initialValue, setInitialValue] = useState(0);

  useEffect(() => {
    const timer =
      counter > 0 && isStarted && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter, isStarted]);

  useEffect(() => {
    if (counter === 0) {
      resetStartValue();
    }
  }, [counter, resetStartValue]);

  const onChangeHandler = event => {
    setCounter(event.target.value);
    setInitialValue(event.target.value);
  };

  return (
    <Container>
      <Title>Countdown Timer</Title>
      <Box initialValue={initialValue} counter={counter} />
      {!isStarted && !isPaused ?
        <InputStyled 
          onChange={onChangeHandler}
          value={counter}
          type='number'
          min={0}
        /> :
        <CountdownTimer totalSeconds={counter} />      
      }
      <ButtonsContainer>
        <ButtonStyled onClick={isStarted ? pauseCountDown : startCountDown} disabled={!counter}>{isStarted ? 'Pause' : 'CountDown'}</ButtonStyled>
        <ButtonStyled onClick={stopCountDown} disabled={!counter}>Stop</ButtonStyled>
      </ButtonsContainer>
    </Container>
  );
}
