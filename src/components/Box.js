import React from 'react';
import { BoxContainer, BoxPart } from '../App.styled';

const Box = ({ initialValue, counter }) => {
  return (
    <BoxContainer>
      <BoxPart full={counter < (100 * initialValue) / 100}>100 %</BoxPart>
      <BoxPart full={counter < (90 * initialValue) / 100}>90 %</BoxPart>
      <BoxPart full={counter < (80 * initialValue) / 100}>80 %</BoxPart>
      <BoxPart full={counter < (70 * initialValue) / 100}>70 %</BoxPart>
      <BoxPart full={counter < (60 * initialValue) / 100}>60 %</BoxPart>
      <BoxPart full={counter < (50 * initialValue) / 100}>50 %</BoxPart>
      <BoxPart full={counter < (40 * initialValue) / 100}>40 %</BoxPart>
      <BoxPart full={counter < (30 * initialValue) / 100}>30 %</BoxPart>
      <BoxPart full={counter < (20 * initialValue) / 100}>20 %</BoxPart>
      <BoxPart full={counter < (10 * initialValue) / 100}>10 %</BoxPart>
    </BoxContainer>
  );
};

export default Box;
