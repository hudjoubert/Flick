import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Routes from './src/Routes/Routes'

const AppNavigator = StackNavigator(Routes, {headerMode: 'none'});

const App = () => {
  return(
    <AppNavigator />
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

