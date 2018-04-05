import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Home from './pages/container/Home';

import data from './api.json';

ReactDOM.render(<Home data={data} />, document.getElementById('home-container'));
registerServiceWorker();
