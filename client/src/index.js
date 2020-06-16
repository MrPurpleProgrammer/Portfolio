import React from 'react';
import ReactDOM from 'react-dom';
import Application from './scenes/Application';
import * as ServiceWorker from './ServiceWorker';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(<Application />,document.getElementById('root'));
ServiceWorker.unregister();
