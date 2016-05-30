import React, { Component } from 'react-native';
import CommentBox from './components/CommentBox.js';


export default class App extends Component {
  render() {
     var data = [
      {id: 1, author: "Pete Hunt", text: "This is one comment"},
      {id: 2, author: "Jordan Walke", text: "This is a super comment"},
      {id: 3, author: "Jordan Walkerr", text: "This is an ordinary comment"}
     ];
    
    return (
        <CommentBox data={data}/>
    );
  }
}
