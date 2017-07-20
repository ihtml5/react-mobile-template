import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { browserHistory, Router } from 'react-router';
import rootRoute from './routes';
ReactDOM.render(<Router history={browserHistory} routes={rootRoute}></Router>, document.getElementById('root'));
registerServiceWorker();
