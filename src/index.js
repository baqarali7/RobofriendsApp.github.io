import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from "react-redux"
import { createStore, applyMiddleware, combineReducers } from "redux"
import { createLogger } from "redux-logger"
import thunkMiddleWare from "redux-thunk"
import App from './Containers/App'
import './index.css'
import 'tachyons'
import { searchRobots, requestRobots } from './reducers';

const logger = createLogger();
const rootRecucer = combineReducers({searchRobots, requestRobots})

const store = createStore(rootRecucer, applyMiddleware(thunkMiddleWare,logger))

ReactDom.render(<Provider store = {store}>
                    <App />
                </Provider> , document.getElementById("root"));