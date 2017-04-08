import React, {PropTypes} from 'react';
import {View,Text} from 'react-native';
const ProfileDetailItem = (props) => {
  return (
    <View style={{paddingBottom:10,paddingTop:10}}>
      <Text style={{color:"#4a7bbb"}}>
        {props.primary}
      </Text>
      <Text>
        {props.text}
      </Text>
    </View>
  );
}

ProfileDetailItem.propTypes = {
  primary: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default ProfileDetailItem;
