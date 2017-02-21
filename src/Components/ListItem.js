import React from 'react';
import { View } from 'react-native';
import { Row, Image, Subtitle, Text, Caption, Icon, Divider, TouchableOpacity } from '@shoutem/ui';
import moment from 'moment';

class ListItem extends React.Component {

  render() {
    const { title, acf, date, _embedded, content, id, slug } = this.props.data
    const source_url = _embedded["wp:featuredmedia"][0].source_url
    const date_f = moment(date).fromNow();

    return (
      <TouchableOpacity onPress={() => this.props.onPressItem({title, content, id , slug})}>
        <Row>
          <Image
            styleName="small rounded-corners"
            source={{ uri: source_url }}
            style={{backgroundColor: '#f1f1f1'}}
          />
          <View styleName="vertical stretch space-between">
            <Subtitle styleName="top">{title.rendered}</Subtitle>
            <View styleName="horizontal space-between">
              <Caption>{acf.text}  ·  {date_f}</Caption>
            </View>
          </View>
        </Row>
        <Divider styleName="line" />
      </TouchableOpacity>
    );
  }
}

export default ListItem;
