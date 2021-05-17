import React from 'react';
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import { rootReducer } from "./redux/rootReducer";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

render(
    app,
    document.getElementById('root')
);

reportWebVitals();
