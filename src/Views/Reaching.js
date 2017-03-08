import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { Tile, Caption, Row, Icon, Image, Overlay, Title, Subtitle, Button } from '@shoutem/ui';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: 400,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

class Reaching extends Component {

  render() {
   const { region } = this.props;
   console.log(region);

   return (
     <View style={styles.container}>
       <View styleName="content">
      <Title>Map!</Title>
      <Text>Hello!</Text>
      <Text>Hello!</Text>
      <Text>Hello!</Text>
          <Text>Hello!</Text>
      <Text>Hello!</Text>
      <Text>Hello!</Text>
          <Text>Hello!</Text>
      <Text>Hello!</Text>
      <Text>Hello!</Text>
          <Text>Hello!</Text>
      <Text>Hello!</Text>
      <Text>Hello!</Text>
          <Text>Hello!</Text>
      <Text>Hello!</Text>
      <Text>Hello!</Text>
       <MapView
         provider={PROVIDER_GOOGLE}
         style={styles.map}
         region={{
           latitude: -31.563910,
           longitude: 147.154312,
           latitudeDelta: 0.015,
           longitudeDelta: 0.0121,
         }}
       >
       <MapView.Marker
      coordinate={{latitude: -31.563910, longitude: 147.154312}}
      title="Test"
      description="Description"
    />
       </MapView>
       </View>
       <Button styleName="confirmation"><Text>ADD CONVERSATION</Text></Button>
     </View>
   );
 }
}

export default Reaching;