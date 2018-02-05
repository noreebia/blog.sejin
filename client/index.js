import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

import Home from './components/apps/Home';
import PostViewer from './components/apps/PostViewer';
import NoMatch from './components/apps/NoMatch';
import './index.sass';
// import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/postviewer/:id" component={PostViewer}/>
                <Route component={NoMatch}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);

// registerServiceWorker();