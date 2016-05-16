import React, {Component,Text, View} from 'react-native';

import CommentList from './CommentList.js';
import CommentForm from './CommentForm.js';

export default class CommentBox extends React.Component {
  render() {
    return(
        <View>
        <Text>Comment It</Text>
        <CommentList />
        <CommentForm />
        </View>
    );
  }
}