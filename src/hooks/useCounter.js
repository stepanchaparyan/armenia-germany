import { useState } from 'react';

const useCounter = () => {
  const [counter, setCounter] = useState('');
  const [isStarted, setIsStarted] = useState(false);
  const [isPaused, setisPaused] = useState(false);

  const startCountDown = () => {
    setIsStarted(true);
    setisPaused(false);
  };

  const pauseCountDown = () => {
    setisPaused(true);
    setIsStarted(false);
  };

  const resetStartValue = () => {
    setIsStarted(false);
  };

  const stopCountDown = () => {
    setCounter(0);
    resetStartValue();
    setisPaused(false);
  };

  return {
    counter,
    setCounter,
    startCountDown,
    pauseCountDown,
    stopCountDown,
    resetStartValue,
    isStarted,
    isPaused,
  }
};

export default useCounter;
