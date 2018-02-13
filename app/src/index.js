import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';

//bring css
import './css/app.css'


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
