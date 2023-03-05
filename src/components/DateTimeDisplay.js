import React from 'react';
import { Countdown, Value, Type } from '../App.styled';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <Countdown isDanger={isDanger}>
      <Value>{value}</Value>
      <Type>{type}</Type>
    </Countdown>
  );
};

export default DateTimeDisplay;
