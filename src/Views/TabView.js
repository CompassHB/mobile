import React from 'react';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import View1 from './View1'
import View2 from './View2'

class TabView extends React.Component {

  render() {
    const {navigator} = this.props
    return (
      <ScrollableTabView
        renderTabBar={() => <DefaultTabBar
                              activeTextColor="#497f9e"
                              underlineStyle={{ backgroundColor: '#497f9e' }}
                            />
                    }
        tabBarPosition="bottom"
        tabBarBackgroundColor="#f8f8f8"
      >
        <View1 tabLabel="Sermons" navigator={navigator} />
        <View2 tabLabel="Reading" navigator={navigator} />
      </ScrollableTabView>
    );
  }
}

export default TabView;
