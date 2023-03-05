import React from 'react';
import DateTimeDisplay from './components/DateTimeDisplay';
import { CounterView } from './App.styled';

const ShowCounter = ({ hours, minutes, seconds }) => {
  return (
    <CounterView>
      <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
      <p>:</p>
      <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
      <p>:</p>
      <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={seconds <= 9 && minutes === 0 && hours === 0} />
    </CounterView>
  );
};

const toHoursAndMinutes = totalSeconds => {
  const totalMinutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return { hours, minutes, seconds };
};

const CountdownTimer = ({ totalSeconds }) => {
  const { hours, minutes, seconds } = toHoursAndMinutes(totalSeconds);

  return <ShowCounter hours={hours} minutes={minutes} seconds={seconds} />;
};

export default CountdownTimer;
