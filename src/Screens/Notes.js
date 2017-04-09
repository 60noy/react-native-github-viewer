import React, {PropTypes} from 'react';
import {View} from 'react-native';
import {Text,List,Separator,ListItem,Button,Icon,Container} from 'native-base';
import SharedHeader from '../Components/SharedHeader';
import AddNewNote from '../Containers/AddNewNote';
export default class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      notes: []
    }
  }

    newNoteHandler(note){
      let notes = this.state.notes
      note && notes.push(note)
      this.setState({notes})
    }

    handleNoteDelete(note){
      let notes = this.state.notes
      // alert(notes.indexOf(note))
      notes.splice(notes.indexOf(note),1)
      this.setState({notes})
    }


  render() {
    let notes = this.state.notes
    return (
      <View style={{flex: 1}}>
        <Container>
        <SharedHeader profileImage={this.props.user.avatar_url}
        username={this.props.user.login}
        name={this.props.user.name}/>
        <List dataArray={notes}
          renderRow ={((note) =>
            <View style={{ flexDirection:'row'}}>
            <ListItem>
              <Text>
                {note}
              </Text>
              <View style={{}} >
            </View>
            </ListItem>
          </View>

          )
        }>
           </List>
        <AddNewNote onNewNote={(note) => this.newNoteHandler(note)}/>
      </Container>
    </View>
  );
  }
}

Notes.propTypes = {
  user: PropTypes.object.isRequired,
};
