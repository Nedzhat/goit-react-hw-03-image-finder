import { WrapperBtn,Btn } from "./Button.styled"
import PropTypes from 'prop-types';

export const Button = ({ text }) => {
    return <WrapperBtn><Btn>{text}</Btn></WrapperBtn>
}

Button.propTypes = {
    text: PropTypes.string.isRequired
};
