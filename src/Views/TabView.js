import React from 'react';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import View1 from './View1'
import View2 from './View2'

class TabView extends React.Component {

  render() {
    const {navigator} = this.props
    return (
      <ScrollableTabView
        renderTabBar={() => <DefaultTabBar />}
        tabBarPosition="bottom"
      >
        <View1 tabLabel="View 1" navigator={navigator} />
        <View2 tabLabel="View 2" navigator={navigator} />
      </ScrollableTabView>
    );
  }
}

export default TabView;
