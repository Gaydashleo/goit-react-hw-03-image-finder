import { Component, PropTypes } from 'react';
// import PropTypes from 'prop-types';
import { createPortal } from 'react-dom/client';
import { } from './Modal.styled';

const modalroot = document.querySelector('#modal-root');

export class Modal extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    onClose: PropTypes.func,
    children: PropTypes.node.isRequired,
  };

  handleKeyDown = e => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };
   
  handleBackdropClick = event => {
    if (event, currentTarget === event.target) {
      this.props.onClose();
    }
  };


  render() {
    return createPortal(
      <overlay onClick={this}
      <ModalStyled> {this.props.children}</ModalStyled>
    )
  }

}