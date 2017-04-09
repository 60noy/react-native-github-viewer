import SearchBox from '../Components/SearchBox';
import SearchButton from '../Components/SearchButton';
import React, {PropTypes} from 'react';
import {Text,View} from 'react-native';
import {Container,InputGroup} from 'native-base';

export default class Search extends React.Component {
  constructor(){
    super();
    this.state ={
      name: '',
    }

    this.searchUser = this.searchUser.bind(this);
  }

  searchUser(){
    // this.props.navigateToUserPage(this.state.tempValue)
    fetch(`https://api.github.com/users/${this.state.name}`)
    .then(response => response.json())
    .then((value) =>{
     (value.message === 'Not Found' ? this.props.showError('No such user') :
      this.props.navigateToUserPage(value) )})
    .catch(error => alert(error))

  }

  handleTextChange(name){
    this.setState({name})
  }
  render() {
    return (
      <View style={{alignItems:'center',marginLeft:20,marginRight:20}}>
        <SearchBox onChange={this.handleTextChange.bind(this)}/>
        <SearchButton onPress={this.searchUser}/>
      </View>
    );
  }
}
