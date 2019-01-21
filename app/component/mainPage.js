import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import Header from './header';
import Search from './search';
import WasteElement from './WasteElement'

// Selectors and actions
import { startSearch, updateSearchList } from "../actions/searchList";
import { addToFavourites, removeFavourite } from "../actions/favourites";
import searchListSelector from '../selectors/searchListSelector';
import SnackBar from './snackbar';

export class MainPage extends Component {
    
    handleFavouriteClick(waste) {
        waste.favourite ? this.props.removeFavourite(waste.id) : this.props.addToFavourites(waste);
    }

    render() {
        const { classes, favourites, startSearch, updateSearchList, searchList, loadState } = this.props;
        return (
            <div>
                <SnackBar show={loadState} timer={6000}>
                  <p>Loading...</p>
                </SnackBar>
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
                        <h2 className={classes.textHeader}> Favourite </h2>
                        {favourites.map(w => <WasteElement key={w.id} waste={w} onClick={() => this.handleFavouriteClick(w)}/>)}
                    </div>
                    :
                    false
                }
            </div>
        );
    }
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
        color: '#41a570',
        paddingTop: '20px'
    }
};


const mapStateToProps = ({ searchList, favourites, loadState }) => ({
    favourites,
    searchList: searchListSelector(searchList, favourites),
    loadState,
});

const mapDispatchToProps = dispatch => ({
    startSearch: item => dispatch(startSearch(item)),
    updateSearchList: () => dispatch(updateSearchList([])),
    addToFavourites: waste => dispatch(addToFavourites(waste)),
    removeFavourite: id => dispatch(removeFavourite(id))
});

MainPage.propTypes = {
    classes: PropTypes.object.isRequired,
    favourites: PropTypes.array,
    searchList: PropTypes.array,
    startSearch: PropTypes.func.isRequired,
    updateSearchList: PropTypes.func.isRequired,
    addToFavourites: PropTypes.func.isRequired,
    removeFavourite: PropTypes.func.isRequired,
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    injectSheet(styles),
)(MainPage);