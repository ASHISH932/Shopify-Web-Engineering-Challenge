import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { compose } from 'recompose';
import { connect } from 'react-redux';

// Components
import Header from './header';
import Search from './search';
import WasteElement from './WasteElement'

// Selectors and actions
import { startSearch, updateSearchList } from "../actions/searchList";
import { addToFavourites, removeFavourite } from "../actions/favourites";
import searchListSelector from '../selectors/searchListSelector';

export class MainPage extends Component {
    
    handleFavouriteClick(waste) {
        waste.favourite ? this.props.removeFavourite(waste.id) : this.props.addToFavourites(waste);
    }

    render() {
        const { classes, favourites, startSearch, updateSearchList, searchList } = this.props;
        return (
            <div>
                <Header>
                    Toronto Waste Lookup
                </Header>
                <Search
                onSearch={item => startSearch(item)}
                onInputCleared={() => updateSearchList()}
                />
                <div className = {classes.waste}>
                    {searchList.map(w => <WasteElement key={w.id} waste={w} onClick={() => this.handleFavouriteClick(w)}/>)}
                </div>
                {
                    favourites.length !== 0 ? 
                    <div className = {classes.favourite} >
                        <h3 className={classes.textHeader}> Favourite </h3>
                        {favourites.map(w => <WasteElement key={w.id} waste={w} onClick={() => this.handleFavouriteClick(w)}/>)}
                    </div>
                    :
                    false
                }
            </div>
        );
    }
};

// <WasteElement waste={searchList[0]} onClick={elem => console.log(searchList[0])}/>

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
    }
};


const mapStateToProps = ({ searchList, favourites }) => ({
    favourites,
    searchList: searchListSelector(searchList, favourites),
});

const mapDispatchToProps = dispatch => ({
    startSearch: item => dispatch(startSearch(item)),
    updateSearchList: () => dispatch(updateSearchList([])),
    addToFavourites: waste => dispatch(addToFavourites(waste)),
    removeFavourite: id => dispatch(removeFavourite(id))
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    injectSheet(styles),
)(MainPage);