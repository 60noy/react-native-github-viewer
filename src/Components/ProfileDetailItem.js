import React, {PropTypes} from 'react';
import {View,Text} from 'react-native';

const ProfileDetailItem = (props) => {
  return (
    <View style={{paddingBottom:10,paddingTop:10}}>
      <Text style={{color:"#03A9F4",fontSize:16,marginBottom:4}}>
        {props.primary}
      </Text>
      <Text style={{fontSize:18,paddingLeft:4}}>
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
