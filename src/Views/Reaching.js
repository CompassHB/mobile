import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, AsyncStorage } from 'react-native';
import { Tile, Caption, Row, Icon, Image, Overlay, Alert, Title, Subtitle, Button } from '@shoutem/ui';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const API_GET_URL = 'https://api.compasshb.com/wp-json/store-locator-plus/v2/locations';
const API_POST_URL = 'https://api.compasshb.com/wp-json/gf/v2/forms/1/submissions';

const styles = StyleSheet.create({
 container: {
   flex: 1,
},
 map_container: {
   ...StyleSheet.absoluteFillObject,
   height: Dimensions.get('window').height-130,
   width: Dimensions.get('window').width,
   justifyContent: 'flex-end',
   alignItems: 'center',
   
 },
 map: {
    ...StyleSheet.absoluteFillObject,
 },
 btn_container: {
   top: Dimensions.get('window').height-115,
   height: 50,
   marginLeft: 120,
   marginRight: 120,
   alignItems: 'center',
   justifyContent: 'center',
   borderColor: '#ffffff',
   borderWidth: 1,
   borderLeftColor: '#888888',
   borderRightColor: '#888888',
 },
});

class Reaching extends Component {

  constructor(){
    super()
    this.state = {
      loading: true,
      error: false,
      datas: [],
      region: {
        latitude: 33.74078,
        longitude: -118.040232,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      currentPosition: {
        latitude: 33.74078,
        longitude: -118.040232,
      },
    }
  }

  componentWillMount = async () => {
    try {
      this.fetchCoordinates();
    } catch (e) {
      this.setState({loading: false, error: true})
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = JSON.stringify(position);
        this.setState({
          currentPosition: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }
        });
        console.log(initialPosition);
      },
      (error) => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
 }

  fetchCoordinates = async () => {
    try {
      const response = await fetch(API_GET_URL)
      const datas = await response.json()
      this.setState({loading: false, datas})
    } catch (e) {
      this.setState({loading: false, error: true})
    }
  }

  onAddCoordinate = () => {
    try {
      this.postData();
    } catch (e) {
      this.setState({loading: false, error: true})
    }
  };

  async postData() {
    try {
      const response = await fetch(API_POST_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          input_1: this.state.currentPosition.latitude,
          input_3: this.state.currentPosition.longitude,
          input_5: 'test',
          description: 'testing',
        })
      })
      const responseData = await response.json()
      this.setState({loading: false})
      if (responseData.is_valid) {
        this.state.datas.push({
            sl_latitude: '29.563910',
            sl_longitude: '145.154312',
            sl_id: 'test',
        })
        alert('Success');
      }
    } catch (e) {
      this.setState({loading: false, error: true})
    }
  }

  onRegionChange(region) {
    // this.setState({ region: region});
  }

  render() {
   const { region } = this.props;

   return (
     <View style={styles.container}>
        <View style={styles.map_container}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={this.state.region}
            onRegionChange={this.onRegionChange}
            showsUserLocation={true}
          >
            {this.state.datas.map((data, index) => {
             return <MapView.Marker
               key={index}
               coordinate={{
                 latitude: parseFloat(data.sl_latitude),
                 longitude: parseFloat(data.sl_longitude),
               }}
               title={data.sl_id}
               description="Description"
              />
            })}

          </MapView>
        </View>
        <View style={styles.btn_container}>
          <Button onPress={this.onAddCoordinate} title="ADD CONVERSATION">
            <Text>ADD CONVERSATION</Text>
          </Button>
        </View>
     </View>
   );
 }
}

export default Reaching;