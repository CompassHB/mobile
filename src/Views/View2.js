import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationBar, ListView } from '@shoutem/ui';
import ItemDetailView from './ItemDetailView'
import ListItem2 from '../Components/ListItem2'

const API_URL = 'https://api.compasshb.com/reading/wp-json/wp/v2/posts?_embed';

class View2 extends React.Component {

  state = {
    loading: true,
    error: false,
    posts: [],
  }

  onPressItem = (post) => {
    const { navigator } = this.props
    navigator.push({
      component: ItemDetailView,
      passProps: {
        index: 1,
        navigator: navigator,
        post: post
      }
    })
  }

  componentWillMount = async () => {
    try {
      const response = await fetch(API_URL)
      const posts = await response.json()
      this.setState({loading: false, posts})
    } catch (e) {
      console.log(e);
      this.setState({loading: false, error: true})
    }
  }


  render() {
    const {posts, loading, error} = this.state

    return (
      <View style={styles.container}>
        <NavigationBar title="COMPASSHB" />
        <View style={styles.contentView}>
          { error==true ? <Text> Failed to load posts! </Text> : <ListView
                data={posts}
                loading={loading ? true : false}
                renderRow={(post) => <ListItem2 data={post} onPressItem={this.onPressItem}/> }
            />
          }
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
