import React, {PropTypes} from 'react';
import {View,Text} from 'react-native';
import SharedHeader from '../Components/SharedHeader';
import DetailList from '../Components/DetailList';
export default class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      console.log('userprofile user',this.props.user);
        return (
            <View>
              
              <SharedHeader
                profileImage={this.props.user.avatar_url}
                name={this.props.user.name}
                username={this.props.user.login}
               />

               <DetailList user={this.props.user}/>
            </View>
        );
    }
}

UserProfile.propTypes = {

};
