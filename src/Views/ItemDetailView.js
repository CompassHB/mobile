import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationBar } from '@shoutem/ui';

class ItemDetailView extends React.Component {

  navigateBack(){

  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          hasHistory
          title="Item Details"
          navigateBack={this.props.navigator.pop}
          style={{
            container:{
              paddingBottom: 6
            },
            centerComponent:{
              marginBottom: 9
            }
          }}
        />

        <View style={styles.contentView}>
          <Text>Item Details</Text>
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

export default ItemDetailView;
