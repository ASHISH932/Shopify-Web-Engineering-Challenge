import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './component/mainPage';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <MainPage />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));