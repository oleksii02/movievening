import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './MyButton.css'

const MyButton = (
    {children, onClick, className, disabled, active}
) => {
    const classes = classNames(
        'btn',
        className,
        {active},
        'MyButton',
    )


    return (
    <div>
        <button
            className={classes}
            disabled={disabled}
            onClick={onClick}

        >
            {children}

        </button>
    </div>

    );
};

MyButton.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool,

};

MyButton.defaultProps = {
    children: 'Default button',
    onClick: () => {
    },
    className: '',
    disabled: false,
    active: false


};


export default MyButton;