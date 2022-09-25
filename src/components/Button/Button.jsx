import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

export const Button = ( { text, onClick }) => (
  <StyledButton type="button"  onClick={onClick}>
   {text}
  </StyledButton> 
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
