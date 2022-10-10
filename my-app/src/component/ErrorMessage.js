import React from 'react';

const ErrorMessage = (props) => {

    if (props.state[props.name]) {
        return null;
    }

    return (
        <p style={{ color: "red", margin: 0, fontSize: "0.8em" }}>
            {props.errors[props.name]}
        </p>
    );
}

export default ErrorMessage;
