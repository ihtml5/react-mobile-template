import React from 'react';
import ReactDOM from 'react-dom';
import VirtualCom from './components/list';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<VirtualCom count={12}/>, document.getElementById('root'));
registerServiceWorker();
