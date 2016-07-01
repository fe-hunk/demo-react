import './index.html';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer as routing } from 'react-router-redux';
import reducers from '../reducers/index';
import './index.less';
import App from '../components/App'
import * as Util from '../services/utils';


const initialState = {};
const store = createStore(combineReducers({
  ...reducers, routing,
}), initialState,
    window.devToolsExtension ? window.devToolsExtension() : f => f
);
window.store = store;
Util.entends(Component.prototype,Util);
let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>
  , document.getElementById('root'));
};

render();
