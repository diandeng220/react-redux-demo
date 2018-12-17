import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';
import createStore from './redux/createStore';
import { Provider } from './redux/react-redux';

const reducers = ({type, payload}, state) => {
    switch (type) {
        case 'TOOGLE_MODAL':
            return {
                ...state,
                modalVisble: payload
            };
        default:
            return {
                ...state
            }
    }
}

const store = createStore(reducers, {
    modalVisble: false
});

window._store = store._store;

const CreateHash = () => {
    return (
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    )
}

ReactDOM.render(<CreateHash/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
