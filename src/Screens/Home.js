import React, {PropTypes} from 'react';
import {ToastAndroid,View,Text,TextInput,Button} from 'react-native';
import Search from '../Containers/Search';
export default class Home extends React.Component {
  constructor(){
    super();
    this.handleUserNotFound = this.handleUserNotFound.bind(this);

  }

  handleUserPage(screen,userData){
    this.props.navigator.push(
      {name: screen, passProps: {
        user: userData
      }
      })
  }

  handleUserNotFound(error){
    alert(error)
  }

  render() {
    return (
      <View>
        <Text>
          Home
        </Text>
        <Search navigateToUserPage={this.handleUserPage.bind(this,'MenuScreen')}
        showError={this.handleUserNotFound}/>
      </View>
    );
  }
}

Home.propTypes = {
};
