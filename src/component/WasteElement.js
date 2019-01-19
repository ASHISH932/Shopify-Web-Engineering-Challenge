import React from 'react';
import injectSheet from 'react-jss';

// export const DataListContainer = (props) => {
export const WasteElement = ({ classes, waste, onClick }) => (
    <div className={classes.main}>
        <p className={waste.favourite ? classes.favourite : classes.normal}>
            <i className="fa fa-star" aria-hidden="true" onClick={e => onClick(e)}></i>
            {waste.title}
        </p>
        <div className={classes.list}  dangerouslySetInnerHTML={{__html: waste.body }} />
    </div>);

const styles = {
    main: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
    },
    favourite: {
        '& i':{
            color: '#229261',
            paddingRight: '6px'
        }
    },
    normal: {
        '& i':{
            color: '#aaa',
            paddingRight: '6px'
        }
    },
    list: {
        '& li': {
            paddingBottom: '10px'
        }
    }
}

export default injectSheet(styles)(WasteElement);
// {!!props.header ? <h3>{props.header}</h3> : false}