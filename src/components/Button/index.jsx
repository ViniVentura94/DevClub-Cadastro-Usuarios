import PropTypes from 'prop-types';
import { Button } from './styles';


function defaultButton({ children, theme, ...props }) {

    return (
        <Button {...props} theme={theme}> {children} </Button>
    );
}

defaultButton.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.string
}

export default defaultButton