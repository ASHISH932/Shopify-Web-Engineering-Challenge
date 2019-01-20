import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import favourites from '../reducer/favourites';
import searchList from '../reducer/searchList';
import mySaga from '../sagas/mySaga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(combineReducers({
        favourites,
        searchList
    }),
    composeEnhancer(applyMiddleware(sagaMiddleware)),
    );
    sagaMiddleware.run(mySaga);
    return store;
}