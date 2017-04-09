import React, {PropTypes} from 'react';
import {View, Image} from 'react-native';
import {Text} from 'native-base';
import UserHeader from '../Components/UserHeader';
import GotoButton from '../Components/GotoButton';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.navigate = this.navigate.bind(this);
  }

  navigate(screen){
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
      <View style={{flex: 1}}>
        <UserHeader
          name={userData.login}
          img={userData.avatar_url}/>
          <View style={{flex:1,flexDirection:'column'}}>
          <GotoButton
            title="View Profile"
            full danger
            onPress={() => this.navigate('UserProfileScreen')}
          />

          <GotoButton
            full
            info
            title="View Repositories"
            onPress={() => this.navigate('ReposScreen')}
          />

          <GotoButton
            full success
            title="View Notes"
            onPress={() => this.navigate('NotesScreen')}
          />
        </View>

    </View>
  );
  }
}

Menu.propTypes = {
  user: PropTypes.object.isRequired
};
