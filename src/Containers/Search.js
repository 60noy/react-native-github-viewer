import SearchBox from '../Components/SearchBox';
import SearchButton from '../Components/SearchButton';
import React, {PropTypes} from 'react';
import {Text,View} from 'react-native';

export default class Search extends React.Component {
  constructor(){
    super();
    this.state ={
      name: ''
    }

    this.searchUser = this.searchUser.bind(this);
  }

  searchUser(){
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
      <View>
        <SearchBox onChange={this.handleTextChange.bind(this)}/>
        <SearchButton onPress={this.searchUser} title="Search" />
      </View>
    );
  }
}
