import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { store } from './redux/store.js';

import Home from './pages/Home.jsx';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Home />
    </Provider>
);
