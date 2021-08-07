import './polyfills.ts';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './gui/App';
import {Provider} from 'react-redux';
import store from './data/redux';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
