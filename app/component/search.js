import React, { Component } from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

export class Search extends Component {
    state = {
      input: '',
    };
    handleClick = (e) => {
        e.preventDefault();
        const val = this.state.input;
        if (val.length > 0) {
            this.props.onSearch(val);
        }
    };
    handleChange = (e) => {
        const a = e.target.value;
        if(a.length > 0) {
            this.setState({
                input: a
            })
        } else {
            this.props.onInputCleared();
        }
    };
    handleKeyDown = (e) => {
        if (e.keyCode === 13 && !e.shiftKey) {
            this.handleClick(e);
        }
    };
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.main}>
                <input type="text" className={classes.text} placeholder="Search" onKeyDown={this.handleKeyDown} onChange={this.handleChange}/>
                <button id="searchButton" onClick={this.handleClick} className={classes.button} aria-pressed="true">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </button>
            </div>
        );
    }
}

const styles = {
    main: {
        margin: 'auto',
        display: 'grid',
        gridTemplateColumns: '15fr 1fr',
        gridGap: '10px',
        padding: '0 2%'
    },
    text: {
        height: 49,
        margin: '4px 2px',
        padding: '8px',
        boxSizing: 'border-box',
        borderRadius: '4px',
        fontSize: '16px'
    },
    button: {
        color: 'white',
        borderRadius: '4px',
        fontSize: '25px',
        margin: '4px 2px',
        cursor: 'pointer',
        backgroundColor:  '#229261 !important',
        border: '1px solid  #229261',
    },
    "search:before" :{
        content: "\f00e"
    },
    "fa-search" : {
        fontSize: '48px'
    }
};


Search.propTypes = {
    classes: PropTypes.object.isRequired,
    onSearch: PropTypes.func.isRequired,
    onInputCleared: PropTypes.func.isRequired,
};

export default injectSheet(styles)(Search);