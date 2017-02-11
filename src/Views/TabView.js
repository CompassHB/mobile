import React from 'react';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import View1 from './View1'
import View2 from './View2'

class TabView extends React.Component {

  render() {
    return (
      <ScrollableTabView
        style={{marginTop: 20, }}
        renderTabBar={() => <DefaultTabBar />}
      >
        <View1 tabLabel="View 1" />
        <View2 tabLabel="View 2" />
      </ScrollableTabView>
    );
  }

}

export default TabView;
