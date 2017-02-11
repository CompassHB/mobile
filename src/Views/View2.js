import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationBar, Title } from '@shoutem/ui';
import ItemDetailView from './ItemDetailView'

class View2 extends React.Component {

  onPressItem = (item) => {
    const { navigator } = this.props
    navigator.push({
      component: ItemDetailView,
      passProps: {
        index: 1,
        navigator: navigator
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar centerComponent={<Title>COMPASSHB</Title>} />
        <View style={styles.contentView}>
          <Text onPress={this.onPressItem}>View 2</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  contentView: {
    marginTop: 70,
    backgroundColor: 'transparent'
  }
});

export default View2;
