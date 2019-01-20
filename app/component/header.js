import React from 'react';
import injectSheet from 'react-jss';

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
        width: '100%',
        height: '15%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to right, #1d5c91 0%, #229261 100%);',
        color: 'white',
        marginBottom: '30px'
    }
}

export default injectSheet(styles)(Header);