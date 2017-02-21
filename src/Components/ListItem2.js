import React from 'react';
import { View } from 'react-native';
import moment from 'moment';
import { Row, Subtitle, Divider, Icon, Text, TouchableOpacity, Caption } from '@shoutem/ui';

class ListItem2 extends React.Component {

  render() {
    const { title, content, date, id, slug } = this.props.data
    const date_f = moment(date).fromNow();

    return (
      <TouchableOpacity onPress={() => this.props.onPressItem({title, content, id, slug})}>
        <Row styleName="small">
          <Text>
            {title.rendered} {'\n'}
            <Caption>{date_f}</Caption>
          </Text>
          <Icon styleName="disclosure" name="right-arrow" />
        </Row>
        <Divider styleName="line" />
      </TouchableOpacity>
    );
  }
}

export default ListItem2;
