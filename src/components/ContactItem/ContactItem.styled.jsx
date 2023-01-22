import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Item = styled.p`
  width: 350px;
  height: 20px;
  margin-bottom: 20px;
  font-size: 16px;
`;

export const Button = styled.button`
  align-items: center;
  margin-left: 8px;
  display: block;
  height: 25px;
  border-radius: 4px;
  border: #87CEFA;
  background: #87CEFA;
  font-size: 14px;
  font-weight: normal;
  text-transform: capitalize;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.20);
   &:hover, &:focus {
        color: white;
        background: #87CEFA;
        border: #87CEFA;
        outline: transparent;
        };
`;
