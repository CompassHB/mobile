import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Navigator, BackAndroid } from 'react-native';
import TabView from './src/Views/TabView';
import ItemDetailView from './src/Views/ItemDetailView'

var _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator.getCurrentRoutes().length === 1  ) {
    return false;
  }
  _navigator.pop();
  return true;
});

export default class App extends Component {

  renderScene(route, navigator) {
    _navigator = navigator
    let RouteComponent = route.component
    return <RouteComponent navigator={navigator} {...route.passProps} />
  }

  componentWillUnmount(){
    BackAndroid.removeEventListener('hardwareBackPress', () => {
        if (_navigator && _navigator.getCurrentRoutes().length > 1) {
            _navigator.pop();
            return true;
        }
        return false;
    });
  }

  render() {
    return (
      <Navigator
        initialRoute={{ component: TabView }}
        renderScene={this.renderScene}
      />
    );
  }
}
