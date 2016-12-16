import React, {Component} from 'react';
import configureStore from './store/createStore';
import {Provider} from 'react-redux';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import Routers from './router';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routers history={history}/>
      </Provider>
    );
  }
}

export default App;
