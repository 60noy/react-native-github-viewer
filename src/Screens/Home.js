import React, {PropTypes} from 'react';
import {ToastAndroid,View,Text,TextInput,Button} from 'react-native';
import Search from '../Containers/Search';
import {Container,InputGroup,Input,Content,Icon} from 'native-base';
export default class Home extends React.Component {
  constructor(){
    super();
    this.handleUserNotFound = this.handleUserNotFound.bind(this);
  }

  handleUserPage(screen,userData){
    this.props.navigator.push(
      {name: screen, passProps: {
        user: userData,
        title: userData.name
      }
      })
  }

  handleUserNotFound(error){
    alert(error)
  }

  render() {
    return (
      <View style={{backgroundColor:'#03A9F4', flex:1,flexDirection:'column',
        alignItems:'center',justifyContent:'center'}}>
                  <Search navigateToUserPage={this.handleUserPage.bind(this,'MenuScreen')}
                    showError={this.handleUserNotFound}/>
     </View>
    );
  }
}
