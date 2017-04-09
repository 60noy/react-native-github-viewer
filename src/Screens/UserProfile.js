import React, {PropTypes} from 'react';
import {View,Text} from 'react-native';
import SharedHeader from '../Components/SharedHeader';
import ProfileDetailList from '../Components/ProfileDetailList';
export default class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      console.log('userprofile user',this.props.user);
        return (
            <View style={{flex:1}}>

              <SharedHeader
                profileImage={this.props.user.avatar_url}
                username={this.props.user.login}
                name={this.props.user.name}
               />

               <ProfileDetailList user={this.props.user}/>
            </View>
        );
    }
}

UserProfile.propTypes = {

};
