import { WrapperBtn,Btn } from "./Button.styled"
import PropTypes from 'prop-types';

export const Button = ({ text, loadMore }) => {
    return <WrapperBtn><Btn onClick={loadMore}>{text}</Btn></WrapperBtn>
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    loadMore: PropTypes.func.isRequired
};
