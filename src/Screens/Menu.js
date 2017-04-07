import React, {PropTypes} from 'react';
import {View,Text,Button, Image} from 'react-native';
import UserHeader from '../Components/UserHeader';
import GotoButton from '../Components/GotoButton';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.navigate = this.navigate.bind(this);
  }

  navigate(screen){
    let userProfile = this.props.user
    for (item in userProfile) {
      console.log(userProfile[item])
    }
    this.props.navigator.push({
      name:screen,
      passProps:{
        user: this.props.user
      }
    })
  }
  render() {
    let userData = this.props.user
    return (
      <View>
        <UserHeader
          name={userData.login}
          img={userData.avatar_url}/>


        <Button
          onPress={() => {this.props.navigator.pop()}}
          title="back"/>

          <GotoButton
            title="View Profile"
            onPress={() => this.navigate('UserProfileScreen')}
          />

    </View>
  );
  }
}

Menu.propTypes = {
};
