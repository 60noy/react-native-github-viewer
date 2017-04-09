import React, {PropTypes} from 'react';
import {Button,Icon,Input,InputGroup,Text,Container} from 'native-base';
import {View} from 'react-native';

export default class AddNewNote extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      note : '',
    }
    this.handleTextChange = this.handleTextChange.bind(this);
    this.addNote = this.addNote.bind(this);
  }

  addNote() {
    let note = this.state.note
    note && this.setState({note: ''})
    this.props.onNewNote(note)
  }
  
  handleTextChange(note) {
    this.setState({note})
  }

  render() {
    return (
      <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
        <View style={{flex: 2}}>
        <InputGroup regular bordered
          borderWidth={1}
          borderColor="#03A9F4">
          <Input value={this.state.note} ref='inputNote' onChangeText={this.handleTextChange} placeholder="Type note and send"/>
        </InputGroup>
      </View>
      <View style={{flex:1}}>
        <Button onPress={this.addNote} danger>
          <Icon name="send"/><Text>SEND</Text>
        </Button>
      </View>
      </View>
    );
  }
}


AddNewNote.propTypes = {
};
