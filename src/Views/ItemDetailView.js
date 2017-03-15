import React from 'react';
import { View, Text, StyleSheet, ScrollView, WebView, Dimensions, Platform } from 'react-native';
import { NavigationBar, Title, View as SView } from '@shoutem/ui';
import HTML from 'react-native-fence-html'
import cheerio from 'cheerio'

const htmlStyles = {
  h3: {
	   textAlign: 'left',
      color: 'black',
      fontWeight: 'normal' 
	},
  h2: {
    color: 'black'
  },
  span: {
    color: 'black',
    fontWeight: 'bold'
  },
  p: {
    color: 'black'
  },
  h4: {
    fontWeight: 'normal'
  },
  "span_verse_num": {
    "fontSize": "80%",
    "fontWeight": "bold",
    "paddingRight": ".15em",
    "paddingLeft": ".25em",
    "verticalAlign": "text-top"
  },
  "span_woc": {},
  "span_chapter_num": {
    "fontWeight": "bold",
    "paddingRight": ".5em"
  },
  "div_esv_text_p": {
    "textIndent": "2em"
  },
  "div_esv_text_p_same_paragraph": {
    "textIndent": "0"
  },
  "div_block_indent_p": {
    "textIndent": "0",
    "paddingLeft": "2.5em",
    "marginLeft": "0"
  },
  "span_indent": {
    "paddingLeft": "2em"
  },
  "span_indent_2": {
    "paddingLeft": "4em"
  },
  "span_psalm_doxology_line": {
    "paddingLeft": "4em"
  },
  "span_declares_line": {
    "paddingLeft": "6em"
  },
  "span_small_caps": {
    "fontVariant": "small-caps"
  },
  "span_selah": {
    "fontStyle": "italic",
    "marginLeft": "1em"
  },
  "p_extra_space": {
    "marginTop": "2em"
  },
  "div_block_indent_span_verse_num": {
    "paddingLeft": "0"
  },
  "div_block_indent_span_woc": {
    "paddingLeft": "0"
  },
  "h4_speaker": {
    "paddingLeft": "10em",
    "fontVariant": "small-caps",
    "marginBottom": "-1em"
  },
  "h4_textual_note": {
    "fontVariant": "small-caps"
  },
  "h4_psalm_acrostic_title": {
    "fontVariant": "small-caps"
  },
  "h4_psalm_title": {},
  "span_footnote": {
    "fontSize": "80%",
    "paddingRight": ".5em",
    "paddingLeft": "0em",
    "verticalAlign": "text-top"
  },
  "div_footnotes_h3": {
    "marginTop": "0",
    "marginBottom": "0"
  },
  "div_footnotes_p": {
    "textIndent": "0"
  },
  "span_footnote_ref": {
    "fontWeight": "bold"
  },
  "p_copyright": {
    "textIndent": "0"
  },
  "object_audio": {
    "margin": "0 0 0 10px",
    "padding": "0"
  }
 
};


class ItemDetailView extends React.Component {
  state = {
    commentHeight: 1000
  }
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

  renderDisqusComment() {
    const { title, id, slug } = this.props.post;
    const html = `<html>
                    <body>
                      <div id="disqus_thread"></div>
                <script>
                var disqus_shortname = "compasshb";
                var disqus_url = "https://www.compasshb.com/read/${slug}/";
                var disqus_title = "${title.rendered} - Compass Bible Church";
                var disqus_identifier = "read-${id}";

                (function() {
                  var dsq = document.createElement("script"); dsq.type = "text/javascript"; dsq.async = true;
                  dsq.src = "https://" + disqus_shortname + ".disqus.com/embed.js";
                  (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(dsq);
                })();
                </script>
                <script>
                  setTimeout(function() {
                    var div = document.getElementById('disqus_thread');
                    if(window.postMessage) window.postMessage(div.clientHeight);
                    var lastHeight = div.clientHeight;
                    window.postMessage(div.clientHeight);
                    setInterval(function() {
                      var elm = document.body;
                      var newHeight = div.clientHeight;

                      if( lastHeight != newHeight && window.postMessage) {
                         window.postMessage(div.clientHeight);
                      }
                      lastHeight = newHeight;
                    }, 200);
                }, 3000);
                </script>
                </body>
                </html>
    `;
    return html;
  }

  getHtmlRenders() {
    const renderers = {};

    if (Platform.OS == 'ios') {
      renderers.iframe = (htmlAttribs, children, passProps) => {
        return (
          <View style={{width: Dimensions.get('window').width-30, height: 250}} >
            <WebView
              source={{uri: htmlAttribs.src}}
              style={styles.webview}
              startInLoadingState />
          </View>)
      }
    }



    return renderers;
  }
  render() {

    const {title, content, id, slug} = this.props.post

    const renderers = this.getHtmlRenders();

    return (
      <View style={styles.container}>
        <NavigationBar
          hasHistory
          title="CompassHB"
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
            { Platform.OS == 'ios' ? <HTML htmlStyles={htmlStyles} html={content.rendered} renderers={renderers}/> : this.renderVideo() }
            { Platform.OS == 'android' ? <HTML htmlStyles={htmlStyles} html={content.rendered}  renderers={renderers} /> : null }
          </SView>
          <WebView
            source={{ html: this.renderDisqusComment() }}
            style={{
              backgroundColor: 'white',
              height: this.state.commentHeight,
            }}
            scalesPageToFit={true}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            onMessage={(e) => {
              const newHeight = parseInt(e.nativeEvent.data, 10);
              if (newHeight !== NaN)
                this.setState({ commentHeight: newHeight });
            }}
          />
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
  },
  esvVerse: {
    fontSize: 11,
    fontWeight: 'bold'
  },
  esvWoc: {
    color: '#900'
  }
});

export default ItemDetailView;
