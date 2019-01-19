import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Header from './header';
import Search from './search';
import WasteElement from './WasteElement'

const waste = {
    body: "<ul><li>Place item in the <strong>Garbage Bin.</strong></li><li>Place item in the <strong>Garbage Bin.</strong></li></ul>",
    title: "Garbage (wrapping and typing)",
    favourite: true, 
}
const wasteList = [];

export const MainPage = (props) => {
    const { classes } = props;
    return (
        <div>
            <Header>
                Toronto Waste Lookup
            </Header>
            <Search />
            <div className = {classes.waste}>
                <WasteElement waste={waste} />
                <WasteElement waste={waste} />
                <WasteElement waste={waste} />
                <WasteElement waste={waste} />
            </div>
            <div className = {classes.favourite} >
                <h3 className={classes.textHeader}> Favourite </h3>
                <WasteElement waste={waste} />
            </div>
        </div>
    );
};


const styles = {
    waste: {
        padding: '0 2%'
    },
    favourite: {
        padding: '0 2%',
        background: '#f7fefa'
    },
    textHeader: {
        fontWeight: 'bold',
        color: '#41a570'
    },
    header: {
        width: '100%',
        height: '15%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to right, #1d5c91 0%, #229261 100%);',
        color: 'white'
    },
    main: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        height: '85%',
        lineHeight: '25px',
        fontFamily: 'Helvetica, Arial, Lucida Grande, sans-serif',
    },
    list: {
        backgroundColor: '#EEE',
    },
    center: {
        width: '95%',
        marginTop: '5%',
        marginLeft: '5%',
        marginRight: '0%',
    },
    gap: {
        height: '5%',
    }
};

export default injectSheet(styles)(MainPage);