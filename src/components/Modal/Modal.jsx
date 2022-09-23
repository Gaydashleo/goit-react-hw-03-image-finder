import { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Overlay, ModalStyled } from './Modal.styled';
// import { BsXLg } from 'react-icons/bs';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    onClose: PropTypes.func,
    children: PropTypes.node.isRequired,
  };

    componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };
   
  handleBackdropClick = event => {
    if ( event.currentTarget === event.target) {
      this.props.onClose();
    }
  };


  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalStyled> {this.props.children}</ModalStyled>
      </Overlay>,
      modalRoot
      );
  }
}


