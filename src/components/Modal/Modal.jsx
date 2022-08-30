import { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types';
import { ModalOverlay, ModalWindow } from "./Modal.styled"

const modalRoot = document.querySelector('#modal-root'); 

export class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = e => {
            if (e.code === 'Escape') {
                console.log('нажал ескейп');
                console.log(this.props);
                this.props.onClose();
            }
        }

    render() {
    return createPortal(<ModalOverlay>
        <ModalWindow >
            <img src={this.props.route} alt="text" />
        </ModalWindow>
    </ModalOverlay>, modalRoot);
    }
}

Modal.propTypes = {
    route: PropTypes.string.isRequired,
    onToggle: PropTypes.func.isRequired,
};