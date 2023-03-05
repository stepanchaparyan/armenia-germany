import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1``;

export const InputStyled = styled.input`
  border: 2px solid cadetblue;
  width: 80px;
  height: 24px;
  border-radius: 8px;
  padding-left: 8px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin: 24px;
`;

export const ButtonStyled = styled.button`
  color: white;
  font-size: 16px;
  border-radius: 6px;
  border: none;
  background: cadetblue;
  padding: 4px 12px;
  margin-left: 12px;
  cursor: pointer;
  cursor : ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

export const CounterView = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.75rem;
  padding: 0.5rem;
  border: 1px solid #ebebeb;
  border-radius: 0.25rem;
  text-decoration: none;
  color: #000;
`;

export const Countdown = styled.div`
  line-height: 1.25rem;
  padding: 0 0.75rem 0 0.75rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  color : ${props => props.isDanger ? '#ff0000' : 'initial'};
`;

export const Value = styled.p`
  margin: 0;
`;

export const Type = styled.span`
  text-transform: uppercase;
  font-size: 0.75rem;
  line-height: 1rem;
`;

export const BoxContainer = styled.div`
    border: 1px solid cadetblue;
    width: 200px;
    margin: 16px;
    text-align: center;
`;

export const BoxPart = styled.div`
  background : ${props => props.full ? 'white' : 'cadetBlue'};
  padding: 4px;
  font-size: 0.75rem;
`;
