import React from 'react';
import { View } from 'react-native';
import { Row, Subtitle, Divider, Icon, Text, TouchableOpacity } from '@shoutem/ui';

class ListItem2 extends React.Component {

  render() {
    const { title, content } = this.props.data

    return (
      <TouchableOpacity onPress={() => this.props.onPressItem({title, content})}>
        <Row styleName="small">
          <Text>{title.rendered}</Text>
          <Icon styleName="disclosure" name="right-arrow" />
        </Row>
        <Divider styleName="line" />
      </TouchableOpacity>
    );
  }
}

export default ListItem2;
