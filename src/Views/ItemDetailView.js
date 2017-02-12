import React from 'react';
import { View, Text, StyleSheet, ScrollView, WebView, Dimensions, Platform } from 'react-native';
import { NavigationBar, Title, View as SView } from '@shoutem/ui';
import HTML from 'react-native-fence-html'
import cheerio from 'cheerio'

class ItemDetailView extends React.Component {

  renderVideo(){
    if (Platform.OS == "android") {
      const $ = cheerio.load(this.props.post.content.rendered)
      const videoSrc = $('iframe').attr('src')
      if (videoSrc!='' && videoSrc!=null && videoSrc!=undefined) {
        return (
          <View style={{width: Dimensions.get('window').width-30, height: 250}} >
            <WebView
              source={{uri: videoSrc}}
              style={styles.webview}
              startInLoadingState />
          </View>
        )
      }
    }
  }

  render() {

    const {title, content} = this.props.post

    const renderers = {
      iframe: (htmlAttribs, children, passProps) => {
        return (
          <View style={{width: Dimensions.get('window').width-30, height: 250}} >
            <WebView
              source={{uri: htmlAttribs.src}}
              style={styles.webview}
              startInLoadingState />
          </View>)
      }
    }

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
        <ScrollView style={styles.contentView}>
          <SView styleName="md-gutter">
            <Title>{title.rendered}</Title>
            { Platform.OS == 'ios' ? <HTML html={content.rendered} renderers={renderers}/> : this.renderVideo() }
            { Platform.OS == 'android' ? <HTML html={content.rendered} /> : null }
          </SView>
        </ScrollView>
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
    backgroundColor: '#ffffff'
  },
  webview: {
    marginTop: 15,
    marginBottom: 15
  }
});

export default ItemDetailView;
