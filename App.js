import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HumanList from './src/components/HumanList';
import ElephantList from './src/components/ElephantList';
import SanctuaryList from './src/components/SanctuaryList';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './src/reducers';


export default class App extends React.Component {

  createComponent(instance, props) {
    return () => React.createElement(instance, props);
  }
  
  RootStack = createStackNavigator({
      Elephants: ElephantList,
      Sanctuary: SanctuaryList,
      Humans: HumanList
    },
    {
      initialRouteName: 'Elephants',
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#50e5ad'
        }
      },
      transitionConfig: getSlideFromRightTransition
  });

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(reduxThunk))}>
        <this.RootStack />
      </Provider>
    )
  }
}
