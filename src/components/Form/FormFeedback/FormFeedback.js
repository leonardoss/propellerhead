import React from 'react';
import PropTypes from 'prop-types';

class Feedback extends React.Component {
    render(){
        return(
            <span className="msg-hidden">{this.props.message}</span>
        );
    }
}

Feedback.propTypes = {
    message: PropTypes.string
};

export default Feedback;