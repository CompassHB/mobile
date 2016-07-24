/// <reference path="../typings/index.d.ts" />

import * as React from 'react';
import { Component } from 'react';

import { SermonTab } from './components/SermonTab';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    DrawerLayoutAndroid
} from 'react-native';
import ViewStyle = __React.ViewStyle;
import TextStyle = __React.TextStyle

// var mockedData = [{"id":1852,"date":"2016-07-17T23:55:45","date_gmt":"2016-07-17T23:55:45","guid":{"rendered":"https:\/\/api.compasshb.com\/?p=1852"},"modified":"2016-07-18T21:32:08","modified_gmt":"2016-07-18T21:32:08","slug":"betrothed","type":"post","link":"https:\/\/api.compasshb.com\/betrothed\/","title":{"rendered":"Betrothed"},"content":{"rendered":"<p><iframe src=\"https:\/\/player.vimeo.com\/video\/175146286\" width=\"640\" height=\"360\" frameborder=\"0\" title=\"Betrothed\" webkitallowfullscreen mozallowfullscreen allowfullscreen><\/iframe><\/p>\n<p>Review: Hosea 1<br \/>\nHosea &amp; Gomer &#8211;&gt; Jezreel<br \/>\nNo Mercy?<br \/>\nNot a People<\/p>\n<p>Baal &#8211; Fertility God, rain\/crops<\/p>\n<p>God is jealous for the love of his people and will judge them for not loving him faithfully.<\/p>\n<p><strong>1. Remember your first love<\/strong><\/p>\n<p>Deuteronomy 8:11, Psalm 103, Revelation 2:4-5<\/p>\n<p><strong>2. Seek God as your source of Good<\/strong><\/p>\n<p>Deuteronomy 11, Jeremiah 2<\/p>\n<p>God pleading with his people to not have other lovers but come to him<\/p>\n<p><strong>3. Don&#8217;t go a day without saying &#8220;I love you&#8221;<\/strong><\/p>\n<p><strong><\/strong>Exodus 24:3, Jeremiah 31:31<\/p>\n"},"excerpt":{"rendered":"<p>God is jealous for the love of his people and will judge them for not loving him faithfully.<\/p>\n"},"author":6,"featured_media":1854,"comment_status":"closed","ping_status":"closed","sticky":false,"format":"standard","categories":[1],"acf":{"text":"Hosea 2","series":false,"worksheet":false},"_links":{"self":[{"href":"https:\/\/api.compasshb.com\/wp-json\/wp\/v2\/posts\/1852"}],"collection":[{"href":"https:\/\/api.compasshb.com\/wp-json\/wp\/v2\/posts"}],"about":[{"href":"https:\/\/api.compasshb.com\/wp-json\/wp\/v2\/types\/post"}],"author":[{"embeddable":true,"href":"https:\/\/api.compasshb.com\/wp-json\/wp\/v2\/users\/6"}],"replies":[{"embeddable":true,"href":"https:\/\/api.compasshb.com\/wp-json\/wp\/v2\/comments?post=1852"}],"version-history":[{"href":"https:\/\/api.compasshb.com\/wp-json\/wp\/v2\/posts\/1852\/revisions"}],"wp:featuredmedia":[{"embeddable":true,"href":"https:\/\/api.compasshb.com\/wp-json\/wp\/v2\/media\/1854"}],"wp:attachment":[{"href":"https:\/\/api.compasshb.com\/wp-json\/wp\/v2\/media?parent=1852"}],"wp:term":[{"taxonomy":"category","embeddable":true,"href":"https:\/\/api.compasshb.com\/wp-json\/wp\/v2\/categories?post=1852"},{"taxonomy":"post_tag","embeddable":true,"href":"https:\/\/api.compasshb.com\/wp-json\/wp\/v2\/tags?post=1852"}],"curies":[{"name":"wp","href":"https:\/\/api.w.org\/{rel}","templated":true}]}}];

class mobile extends Component<{}, {}> {
  render() {
    var navigationView = (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
        </View>
    );
    return (
        <DrawerLayoutAndroid
            drawerWidth={300}
            renderNavigationView={ () => navigationView}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
          </View>
        </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  } as ViewStyle,
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  } as TextStyle,
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  } as TextStyle,
  listView: {
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('mobile', () => mobile);