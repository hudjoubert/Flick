import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Routes from './src/Routes/Routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './src/reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers)
const AppNavigator = StackNavigator(Routes, { headerMode: 'none' });

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

// export default class App extends Component {
//   render() {
//     return (
//       <HomeView></HomeView>
//     );
//   }
// }

export default App;

