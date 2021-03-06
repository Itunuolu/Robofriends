import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {searchRobots} from './reducers';
import 'tachyons';

const store = createStore(searchRobots)

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
