import React from 'react';
import { useSelector } from 'react-redux';

const CheckRole = (props) => {

    const { user } = useSelector((state) => state.user)

    if (user && user.role != props.role) {
        return null;
    }

    if (!user) {
        return null;
    }

    return (
        <>
            {props.children}
        </>
    );
}

export default CheckRole;
