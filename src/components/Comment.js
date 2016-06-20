import React, {Component, View, Text, PropTypes} from 'react-native';

export default class Comment extends React.Component {

  static defaultProps = {
    author: "",
    children: ""
  };

  static propTypes =  {
    author: React.PropTypes.string,
    children: React.PropTypes.string
  };

  render() {
    return(
        <View>
         <Text>
           {this.props.author}
          </Text>
          <Text>
           {this.props.children}
          </Text>
        </View>
    );
  }
}
