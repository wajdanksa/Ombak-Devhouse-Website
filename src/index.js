import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import HomePage from './HomePage';
import * as serviceWorker from './serviceWorker';
// import Page2 from '../src/Page2'
import Page3 from '../src/Page3'

ReactDOM.render(<Page3 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
