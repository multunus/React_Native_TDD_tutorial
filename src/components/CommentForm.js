import React, {Component, View, TouchableNativeFeedback, Text, TextInput} from 'react-native';
export default class CommentForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: '', comment: ''};
  }
  
  render() {
    return(
        <View>
          <TextInput
           placeholder="name"
           style={{height: 40, borderColor: 'gray', borderWidth: 1}}
           onChangeText={(name) => this.setState({name})}
           value={this.state.name}
          />
          <TextInput
           placeholder="comment"
           style={{height: 40, borderColor: 'gray', borderWidth: 1}}
           onChangeText={(comment) => this.setState({comment})}
           value={this.state.comment}
          />
          <TouchableNativeFeedback
           onPress={this._onPressButton()}>
           <View style={{width: 150, height: 100, backgroundColor: 'red'}}>
             <Text style={{margin: 30}}>Submit</Text>
           </View>
          </TouchableNativeFeedback>
        </View>
    );
  }

  _onPressButton() {
  }
}
