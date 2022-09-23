import styled from 'styled-components';

export const Header = styled.header`
  // z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 32px;
  padding-left: 32px;
  padding-top: 16px;
  padding-bottom: 16px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
 `;

export const Input = styled.input`
  width: 100%;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  `;

export const Button = styled.button`
 
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
 
  &:hover {
    opacity: 5;
  }
`;
