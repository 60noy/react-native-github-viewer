import React, {PropTypes} from 'react';
import {Text,View,Image} from 'react-native';
 const  UserHeader = ({name,img}) => {
  return (
    <View>
      <Text>
        {name}
      </Text>
        <Image source={{uri: img}}
        style={{height:200,width:200}}/>
    </View>
  );
}
export default UserHeader;
UserHeader.propTypes = {
  name : PropTypes.string.isRequired
};
