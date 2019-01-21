import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

export const Header = (props) => {
    const { classes, children } = props;
    return (
        <div className={classes.header}>
            <h1>{children}</h1>
        </div>
    );
};

const styles = {
    header: {
        height: '125px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to right, #1d5c91 0%, #229261 100%);',
        color: 'white',
        marginBottom: '30px'
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.object,
};

export default injectSheet(styles)(Header);