import React from 'react';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import { View } from 'react-native';
import Teaching from './Teaching'
import Training from './Training'
import Reaching from './Reaching'

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
        <Reaching tabLabel="Reaching" navigator={navigator} />
        <Teaching tabLabel="Teaching" navigator={navigator} />
        <Training tabLabel="Training" navigator={navigator} />
        <Training tabLabel="Events" navigator={navigator} />
      </ScrollableTabView>
    );
  }
}

export default TabView;
