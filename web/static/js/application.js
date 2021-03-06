import React              from 'react';
import ReactDom           from 'react-dom';
import { browserHistory } from 'react-router';
import configureStore     from './store';
import Root               from './containers/root';

const store = configureStore(browserHistory);
const target = document.getElementById('application');
const node = <Root routerHistory={ browserHistory } store={ store } />;

ReactDom.render(node, target);
