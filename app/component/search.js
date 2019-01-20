import React, { Component } from 'react';
import injectSheet from 'react-jss';

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
        margin: '20px',
        display: 'flex',
        alignContent: 'strech',
        height: '70px',
        marginRight: '20px',
        paddingBottom: '20px'
    },
    text: {
        minWidth: '0px',
        padding: '20px',
        fontSize: '25px',
        border: '1px solid grey',
        background: '#ffffff',
        borderRadius: '3px',
        flex: '1 1 auto'
    },
    button: {
        width: '70px',
        height: '70px',
        minWidth: '70px',
        marginWight: '40px',
        marginLeft: '20px',
        background: '#23975e',
        color: '#ffffff',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '4px',
        boxShadow: '0 3px 2.5px -2.5px gray',
        flex: '0 1 70px'
    },
    "search:before" :{
        content: "\f00e"
    },
    "fa-search" : {
        fontSize: '48px'
    }
};

export default injectSheet(styles)(Search);