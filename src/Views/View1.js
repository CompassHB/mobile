import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationBar, Title } from '@shoutem/ui';

class View1 extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar centerComponent={<Title>COMPASSHB</Title>} />
        <View style={styles.contentView}>
          <Text>View 1</Text>
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

export default View1;
