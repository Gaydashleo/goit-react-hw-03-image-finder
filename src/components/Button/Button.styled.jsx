import styled from 'styled-components';

export const StyledButton = styled.button`
margin: 0 auto;
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #3f51b5;
  text-align: center;
  display: inline-block;
  color: #fff;
  cursor: pointer;
   box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;
