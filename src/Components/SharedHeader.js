import React, {PropTypes} from 'react';
import {View,Text,Image} from 'react-native';
import RoundImage from './RoundImage';

 const SharedHeader = (props) => {
  return (
    <View>
      <RoundImage src={props.profileImage}/>
      <Text>
        {props.name}
      </Text>
      <Text>
        {props.username}
      </Text>
    </View>
  );
}


SharedHeader.propTypes = {
  profileImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default SharedHeader;
