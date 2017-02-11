import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationBar } from '@shoutem/ui';

class ItemDetailView extends React.Component {

  render() {

    const {title, content} = this.props.post

    return (
      <View style={styles.container}>
        <NavigationBar
          hasHistory
          title="COMPASSHB"
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
          <Text>{title.rendered}</Text>
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
