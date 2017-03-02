import React from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import { NavigationBar, ListView, Image, Overlay, Heading, Title, Subtitle, Tile, Caption, Icon } from '@shoutem/ui';
import ListItem from '../Components/ListItem'
import ItemDetailView from './ItemDetailView'

const API_URL = 'https://api.compasshb.com/wp-json/wp/v2/posts?_embed&categories=1&per_page=100';
const VIEW1_POSTS = 'VIEW1_POSTS'

class Teaching extends React.Component {

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
      const store = await AsyncStorage.getItem(VIEW1_POSTS)
      const posts = JSON.parse(store)
      if (posts !== null) {
        this.setState({loading: false, posts})
      }
      this.fetchPosts();
    } catch (e) {
      this.setState({loading: false, error: true})
    }
  }

  fetchPosts = async () => {
    try {
      const response = await fetch(API_URL)
      const posts = await response.json()
      await AsyncStorage.setItem(VIEW1_POSTS, JSON.stringify(posts))
      this.setState({loading: false, posts})
    } catch (e) {
      this.setState({loading: false, error: true})
    }
  }

  render() {
    const {posts, loading, error} = this.state

    return (
      <View style={styles.container}>
      <Image
  styleName="featured"
  source={{ uri: 'http://shoutem.github.io/img/ui-toolkit/examples/image-11.png' }}
>
  <Tile>
    <Title styleName="md-gutter-top">((Lastest Sermon Title Here))</Title>
    <Heading>Matthew 5:5</Heading>
    <Caption>Preacher</Caption>
  </Tile>
</Image>
        <View style={styles.contentView}>
          { error==true ? <Text> Failed to load posts! </Text> :  <ListView
                data={posts}
                loading={loading ? true : false}
                renderRow={(post) => <ListItem data={post} type='View1' onPressItem={this.onPressItem}/> }
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
    marginTop: 0,
  }
});

export default Teaching;
