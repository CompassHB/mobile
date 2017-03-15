import React from 'react';
import { View } from 'react-native';
import { Row, Image, Subtitle, Text, Caption, Icon, Divider, TouchableOpacity } from '@shoutem/ui';
import moment from 'moment';

class ListItem3 extends React.Component {

  render() {
    const { title, date , content, id, slug,_links } = this.props.data;
    //const source_url = _links["wp:featuredmedia"][0].source_url;
    const source_url = "https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/calendar-512.png";
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
              <Caption>{date_f}</Caption>
            </View>
          </View>
        </Row>
        <Divider styleName="line" />
      </TouchableOpacity>
    );
  }
}

export default ListItem3;
