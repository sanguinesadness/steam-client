import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/other/Root';
import './styles/scss/style.css';
import { Provider } from 'react-redux';
import { store } from './store';
import Modal from 'react-modal';
import { setModalDefaultStyles } from './styles/modal/modal-style-setter';

Modal.setAppElement("#app");
setModalDefaultStyles();

ReactDOM.render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    document.getElementById("app")
);
