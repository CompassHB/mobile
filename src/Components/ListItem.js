import React from 'react';
import { View } from 'react-native';
import { Row, Image, Subtitle, Divider, TouchableOpacity } from '@shoutem/ui';

class ListItem extends React.Component {

  render() {
    const { title, _embedded, content } = this.props.data
    const source_url = _embedded["wp:featuredmedia"][0].source_url

    return (
      <TouchableOpacity onPress={() => this.props.onPressItem({title, content})}>
        <Row>
          <Image
            styleName="small rounded-corners"
            source={{ uri: source_url }}
            style={{backgroundColor: '#f1f1f1'}}
          />
          <Subtitle styleName="top">{title.rendered}</Subtitle>
        </Row>
        <Divider styleName="line" />
      </TouchableOpacity>
    );
  }
}

export default ListItem;
