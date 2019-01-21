import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import favourites from '../reducers/favourites';
import searchList from '../reducers/searchList';
import loadState from '../reducers/loadState';
import mySaga from '../sagas/mySaga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(combineReducers({
        favourites,
        searchList,
        loadState
    }),
    composeEnhancer(applyMiddleware(sagaMiddleware)),
    );
    sagaMiddleware.run(mySaga);
    return store;
}